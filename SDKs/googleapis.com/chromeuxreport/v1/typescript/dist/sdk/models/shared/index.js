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
__exportStar(require("./bin"), exports);
__exportStar(require("./collectionperiod"), exports);
__exportStar(require("./date"), exports);
__exportStar(require("./key"), exports);
__exportStar(require("./metric"), exports);
__exportStar(require("./percentiles"), exports);
__exportStar(require("./queryrequest"), exports);
__exportStar(require("./queryresponse"), exports);
__exportStar(require("./record"), exports);
__exportStar(require("./urlnormalization"), exports);
__exportStar(require("./xgafvenum"), exports);
