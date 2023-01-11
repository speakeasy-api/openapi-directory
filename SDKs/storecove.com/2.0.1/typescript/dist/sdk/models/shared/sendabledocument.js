"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendableDocument = exports.SendableDocumentDocumentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var invoice_1 = require("./invoice");
var documentinvoiceresponse_1 = require("./documentinvoiceresponse");
var rawdocumentdata_1 = require("./rawdocumentdata");
var SendableDocumentDocumentTypeEnum;
(function (SendableDocumentDocumentTypeEnum) {
    SendableDocumentDocumentTypeEnum["Invoice"] = "invoice";
    SendableDocumentDocumentTypeEnum["InvoiceResponse"] = "invoice_response";
})(SendableDocumentDocumentTypeEnum = exports.SendableDocumentDocumentTypeEnum || (exports.SendableDocumentDocumentTypeEnum = {}));
// SendableDocument
/**
 * The document to send.
**/
var SendableDocument = /** @class */ (function (_super) {
    __extends(SendableDocument, _super);
    function SendableDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentType" }),
        __metadata("design:type", String)
    ], SendableDocument.prototype, "documentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice" }),
        __metadata("design:type", invoice_1.Invoice)
    ], SendableDocument.prototype, "invoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceResponse" }),
        __metadata("design:type", documentinvoiceresponse_1.DocumentInvoiceResponse)
    ], SendableDocument.prototype, "invoiceResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rawDocumentData" }),
        __metadata("design:type", rawdocumentdata_1.RawDocumentData)
    ], SendableDocument.prototype, "rawDocumentData", void 0);
    return SendableDocument;
}(utils_1.SpeakeasyBase));
exports.SendableDocument = SendableDocument;
