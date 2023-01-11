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
__exportStar(require("./createadministration"), exports);
__exportStar(require("./createdocumentsubmission"), exports);
__exportStar(require("./createinvoicesubmission"), exports);
__exportStar(require("./createlegalentity"), exports);
__exportStar(require("./createpeppolidentifier"), exports);
__exportStar(require("./deleteadministration"), exports);
__exportStar(require("./deletelegalentity"), exports);
__exportStar(require("./deletepeppolidentifier"), exports);
__exportStar(require("./deletewebhookinstance"), exports);
__exportStar(require("./discoveryreceives"), exports);
__exportStar(require("./getadministration"), exports);
__exportStar(require("./getinvoicejson"), exports);
__exportStar(require("./getinvoiceubl"), exports);
__exportStar(require("./getinvoiceublversioned"), exports);
__exportStar(require("./getlegalentity"), exports);
__exportStar(require("./getwebhookinstances"), exports);
__exportStar(require("./preflightinvoicerecipient"), exports);
__exportStar(require("./showinvoicesubmissionevidence"), exports);
__exportStar(require("./updateadministration"), exports);
__exportStar(require("./updatelegalentity"), exports);
