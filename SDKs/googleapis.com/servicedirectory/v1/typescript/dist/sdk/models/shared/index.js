"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./altenum"), exports);
__exportStar(require("./binding"), exports);
__exportStar(require("./endpoint"), exports);
__exportStar(require("./expr"), exports);
__exportStar(require("./getiampolicyrequest"), exports);
__exportStar(require("./getpolicyoptions"), exports);
__exportStar(require("./listendpointsresponse"), exports);
__exportStar(require("./listlocationsresponse"), exports);
__exportStar(require("./listnamespacesresponse"), exports);
__exportStar(require("./listservicesresponse"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./namespace"), exports);
__exportStar(require("./policy"), exports);
__exportStar(require("./resolveservicerequest"), exports);
__exportStar(require("./resolveserviceresponse"), exports);
__exportStar(require("./security"), exports);
__exportStar(require("./service"), exports);
__exportStar(require("./setiampolicyrequest"), exports);
__exportStar(require("./testiampermissionsrequest"), exports);
__exportStar(require("./testiampermissionsresponse"), exports);
__exportStar(require("./xgafvenum"), exports);
