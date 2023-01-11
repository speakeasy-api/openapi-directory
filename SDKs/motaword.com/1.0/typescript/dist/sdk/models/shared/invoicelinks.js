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
exports.InvoiceLinks = void 0;
var utils_1 = require("../../../internal/utils");
var href_1 = require("./href");
var InvoiceLinks = /** @class */ (function (_super) {
    __extends(InvoiceLinks, _super);
    function InvoiceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "corporate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=json" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "json", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pdf" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "pdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=view" }),
        __metadata("design:type", href_1.Href)
    ], InvoiceLinks.prototype, "view", void 0);
    return InvoiceLinks;
}(utils_1.SpeakeasyBase));
exports.InvoiceLinks = InvoiceLinks;
