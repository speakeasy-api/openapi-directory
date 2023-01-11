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
__exportStar(require("./admissionrule"), exports);
__exportStar(require("./admissionwhitelistpattern"), exports);
__exportStar(require("./altenum"), exports);
__exportStar(require("./attestationoccurrence"), exports);
__exportStar(require("./attestor"), exports);
__exportStar(require("./attestorpublickey"), exports);
__exportStar(require("./binding"), exports);
__exportStar(require("./expr"), exports);
__exportStar(require("./iampolicy"), exports);
__exportStar(require("./jwt"), exports);
__exportStar(require("./listattestorsresponse"), exports);
__exportStar(require("./pkixpublickey"), exports);
__exportStar(require("./policy"), exports);
__exportStar(require("./security"), exports);
__exportStar(require("./setiampolicyrequest"), exports);
__exportStar(require("./signature"), exports);
__exportStar(require("./testiampermissionsrequest"), exports);
__exportStar(require("./testiampermissionsresponse"), exports);
__exportStar(require("./userownedgrafeasnote"), exports);
__exportStar(require("./validateattestationoccurrencerequest"), exports);
__exportStar(require("./validateattestationoccurrenceresponse"), exports);
__exportStar(require("./xgafvenum"), exports);
