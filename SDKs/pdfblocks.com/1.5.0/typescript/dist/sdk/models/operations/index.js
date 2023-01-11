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
__exportStar(require("./addimagewatermarkv1"), exports);
__exportStar(require("./addpasswordv1"), exports);
__exportStar(require("./addrestrictionsv1"), exports);
__exportStar(require("./addtextwatermarkv1"), exports);
__exportStar(require("./extractpagesv1"), exports);
__exportStar(require("./mergedocumentsv1"), exports);
__exportStar(require("./removepagesv1"), exports);
__exportStar(require("./removepasswordv1"), exports);
__exportStar(require("./removerestrictionsv1"), exports);
__exportStar(require("./removesignaturesv1"), exports);
__exportStar(require("./reversepagesv1"), exports);
__exportStar(require("./rotatepagesv1"), exports);
