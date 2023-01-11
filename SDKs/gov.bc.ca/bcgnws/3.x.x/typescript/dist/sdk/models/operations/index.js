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
__exportStar(require("./getfeaturecategories"), exports);
__exportStar(require("./getfeatureclasses"), exports);
__exportStar(require("./getfeaturesfeatureid"), exports);
__exportStar(require("./getfeaturetypes"), exports);
__exportStar(require("./getnameauthorities"), exports);
__exportStar(require("./getnameschanges"), exports);
__exportStar(require("./getnamesdecisionsrecent"), exports);
__exportStar(require("./getnamesdecisionsyear"), exports);
__exportStar(require("./getnamesinside"), exports);
__exportStar(require("./getnamesnameidoutputformat"), exports);
__exportStar(require("./getnamesnear"), exports);
__exportStar(require("./getnamesnotofficialsearch"), exports);
__exportStar(require("./getnamesofficialsearch"), exports);
__exportStar(require("./getnamessearch"), exports);
