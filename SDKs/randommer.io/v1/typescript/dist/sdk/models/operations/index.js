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
__exportStar(require("./getapicard"), exports);
__exportStar(require("./getapicardtypes"), exports);
__exportStar(require("./getapimisccultures"), exports);
__exportStar(require("./getapimiscrandomaddress"), exports);
__exportStar(require("./getapiname"), exports);
__exportStar(require("./getapinamesuggestions"), exports);
__exportStar(require("./getapiphonecountries"), exports);
__exportStar(require("./getapiphonegenerate"), exports);
__exportStar(require("./getapiphonevalidate"), exports);
__exportStar(require("./getapisocialnumber"), exports);
__exportStar(require("./getapitextloremipsum"), exports);
__exportStar(require("./getapitextpassword"), exports);
__exportStar(require("./postapisocialnumber"), exports);
__exportStar(require("./postapitexthumanize"), exports);
__exportStar(require("./postapitexttransform"), exports);
