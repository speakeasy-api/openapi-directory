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
exports.ItemImportRequest = void 0;
var utils_1 = require("../../../internal/utils");
var itemimportrequestoptions_1 = require("./itemimportrequestoptions");
var itemimportrequestuserauth_1 = require("./itemimportrequestuserauth");
// ItemImportRequest
/**
 * ItemImportRequest defines the request schema for `/item/import`
**/
var ItemImportRequest = /** @class */ (function (_super) {
    __extends(ItemImportRequest, _super);
    function ItemImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], ItemImportRequest.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", itemimportrequestoptions_1.ItemImportRequestOptions)
    ], ItemImportRequest.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], ItemImportRequest.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], ItemImportRequest.prototype, "secret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_auth" }),
        __metadata("design:type", itemimportrequestuserauth_1.ItemImportRequestUserAuth)
    ], ItemImportRequest.prototype, "userAuth", void 0);
    return ItemImportRequest;
}(utils_1.SpeakeasyBase));
exports.ItemImportRequest = ItemImportRequest;
