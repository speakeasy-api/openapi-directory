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
__exportStar(require("./iapgetiampolicy"), exports);
__exportStar(require("./iapgetiapsettings"), exports);
__exportStar(require("./iapprojectsbrandscreate"), exports);
__exportStar(require("./iapprojectsbrandsidentityawareproxyclientscreate"), exports);
__exportStar(require("./iapprojectsbrandsidentityawareproxyclientslist"), exports);
__exportStar(require("./iapprojectsbrandsidentityawareproxyclientsresetsecret"), exports);
__exportStar(require("./iapprojectsbrandslist"), exports);
__exportStar(require("./iapprojectsiaptunnellocationsdestgroupscreate"), exports);
__exportStar(require("./iapprojectsiaptunnellocationsdestgroupsdelete"), exports);
__exportStar(require("./iapprojectsiaptunnellocationsdestgroupsget"), exports);
__exportStar(require("./iapprojectsiaptunnellocationsdestgroupslist"), exports);
__exportStar(require("./iapprojectsiaptunnellocationsdestgroupspatch"), exports);
__exportStar(require("./iapsetiampolicy"), exports);
__exportStar(require("./iaptestiampermissions"), exports);
__exportStar(require("./iapupdateiapsettings"), exports);
