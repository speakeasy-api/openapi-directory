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
__exportStar(require("./comparestation"), exports);
__exportStar(require("./getaemetstation"), exports);
__exportStar(require("./geteasywind"), exports);
__exportStar(require("./geteventstations"), exports);
__exportStar(require("./getforecastpoints"), exports);
__exportStar(require("./getforecasttimeseries"), exports);
__exportStar(require("./getforecasttimeserieswrf"), exports);
__exportStar(require("./getsocibweatherstation"), exports);
__exportStar(require("./getweatherdisplay"), exports);
__exportStar(require("./getwebcams"), exports);
