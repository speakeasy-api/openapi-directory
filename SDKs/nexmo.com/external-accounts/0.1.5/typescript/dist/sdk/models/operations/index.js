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
__exportStar(require("./createmessengeraccount"), exports);
__exportStar(require("./deletemessengeraccount"), exports);
__exportStar(require("./getallaccounts"), exports);
__exportStar(require("./getmessengeraccount"), exports);
__exportStar(require("./getvsmaccount"), exports);
__exportStar(require("./getwaaccount"), exports);
__exportStar(require("./linkapplication"), exports);
__exportStar(require("./unliwithoutapplicationnkapplication"), exports);
__exportStar(require("./updatemessengeraccount"), exports);
