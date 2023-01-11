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
exports.GetPlacementGroupsIdResponse = exports.GetPlacementGroupsIdRequest = exports.GetPlacementGroupsIdPlacementGroupResponse = exports.GetPlacementGroupsIdPlacementGroupResponsePlacementGroup = exports.GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum = exports.GetPlacementGroupsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPlacementGroupsIdPathParams = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsIdPathParams, _super);
    function GetPlacementGroupsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsIdPathParams.prototype, "id", void 0);
    return GetPlacementGroupsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPlacementGroupsIdPathParams = GetPlacementGroupsIdPathParams;
var GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
(function (GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum) {
    GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum["Spread"] = "spread";
})(GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum = exports.GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum || (exports.GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum = {}));
var GetPlacementGroupsIdPlacementGroupResponsePlacementGroup = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsIdPlacementGroupResponsePlacementGroup, _super);
    function GetPlacementGroupsIdPlacementGroupResponsePlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "servers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "type", void 0);
    return GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}(utils_1.SpeakeasyBase));
exports.GetPlacementGroupsIdPlacementGroupResponsePlacementGroup = GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
var GetPlacementGroupsIdPlacementGroupResponse = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsIdPlacementGroupResponse, _super);
    function GetPlacementGroupsIdPlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placement_group" }),
        __metadata("design:type", GetPlacementGroupsIdPlacementGroupResponsePlacementGroup)
    ], GetPlacementGroupsIdPlacementGroupResponse.prototype, "placementGroup", void 0);
    return GetPlacementGroupsIdPlacementGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetPlacementGroupsIdPlacementGroupResponse = GetPlacementGroupsIdPlacementGroupResponse;
var GetPlacementGroupsIdRequest = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsIdRequest, _super);
    function GetPlacementGroupsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlacementGroupsIdPathParams)
    ], GetPlacementGroupsIdRequest.prototype, "pathParams", void 0);
    return GetPlacementGroupsIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetPlacementGroupsIdRequest = GetPlacementGroupsIdRequest;
var GetPlacementGroupsIdResponse = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsIdResponse, _super);
    function GetPlacementGroupsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPlacementGroupsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlacementGroupsIdPlacementGroupResponse)
    ], GetPlacementGroupsIdResponse.prototype, "placementGroupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPlacementGroupsIdResponse.prototype, "statusCode", void 0);
    return GetPlacementGroupsIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetPlacementGroupsIdResponse = GetPlacementGroupsIdResponse;
