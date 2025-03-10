"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CustomDataSource = exports.CustomDataSourceParentLink = exports.CustomDataSourceChildLink = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var CustomDataSourceChildLink = /** @class */ (function (_super) {
    __extends(CustomDataSourceChildLink, _super);
    function CustomDataSourceChildLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "href" }),
        __metadata("design:type", String)
    ], CustomDataSourceChildLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], CustomDataSourceChildLink.prototype, "type", void 0);
    return CustomDataSourceChildLink;
}(utils_1.SpeakeasyBase));
exports.CustomDataSourceChildLink = CustomDataSourceChildLink;
/**
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
 */
var CustomDataSourceParentLink = /** @class */ (function (_super) {
    __extends(CustomDataSourceParentLink, _super);
    function CustomDataSourceParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "href" }),
        __metadata("design:type", String)
    ], CustomDataSourceParentLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], CustomDataSourceParentLink.prototype, "type", void 0);
    return CustomDataSourceParentLink;
}(utils_1.SpeakeasyBase));
exports.CustomDataSourceParentLink = CustomDataSourceParentLink;
/**
 * JSON template for an Analytics custom data source.
 */
var CustomDataSource = /** @class */ (function (_super) {
    __extends(CustomDataSource, _super);
    function CustomDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "childLink" }),
        (0, class_transformer_1.Type)(function () { return CustomDataSourceChildLink; }),
        __metadata("design:type", CustomDataSourceChildLink)
    ], CustomDataSource.prototype, "childLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], CustomDataSource.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "importBehavior" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "importBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "parentLink" }),
        (0, class_transformer_1.Type)(function () { return CustomDataSourceParentLink; }),
        __metadata("design:type", CustomDataSourceParentLink)
    ], CustomDataSource.prototype, "parentLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profilesLinked" }),
        __metadata("design:type", Array)
    ], CustomDataSource.prototype, "profilesLinked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "schema" }),
        __metadata("design:type", Array)
    ], CustomDataSource.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], CustomDataSource.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "uploadType" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "webPropertyId" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "webPropertyId", void 0);
    return CustomDataSource;
}(utils_1.SpeakeasyBase));
exports.CustomDataSource = CustomDataSource;
