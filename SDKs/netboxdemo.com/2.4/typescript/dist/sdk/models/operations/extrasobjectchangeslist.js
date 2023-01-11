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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasObjectChangesListResponse = exports.ExtrasObjectChangesListRequest = exports.ExtrasObjectChangesList200ApplicationJson = exports.ExtrasObjectChangesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExtrasObjectChangesListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListQueryParams, _super);
    function ExtrasObjectChangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=changed_object_type" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object_repr" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectRepr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=request_id" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user_name" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userName", void 0);
    return ExtrasObjectChangesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ExtrasObjectChangesListQueryParams = ExtrasObjectChangesListQueryParams;
var ExtrasObjectChangesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesList200ApplicationJson, _super);
    function ExtrasObjectChangesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ObjectChange }),
        __metadata("design:type", Array)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "results", void 0);
    return ExtrasObjectChangesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ExtrasObjectChangesList200ApplicationJson = ExtrasObjectChangesList200ApplicationJson;
var ExtrasObjectChangesListRequest = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListRequest, _super);
    function ExtrasObjectChangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExtrasObjectChangesListQueryParams)
    ], ExtrasObjectChangesListRequest.prototype, "queryParams", void 0);
    return ExtrasObjectChangesListRequest;
}(utils_1.SpeakeasyBase));
exports.ExtrasObjectChangesListRequest = ExtrasObjectChangesListRequest;
var ExtrasObjectChangesListResponse = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListResponse, _super);
    function ExtrasObjectChangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExtrasObjectChangesList200ApplicationJson)
    ], ExtrasObjectChangesListResponse.prototype, "extrasObjectChangesList200ApplicationJSONObject", void 0);
    return ExtrasObjectChangesListResponse;
}(utils_1.SpeakeasyBase));
exports.ExtrasObjectChangesListResponse = ExtrasObjectChangesListResponse;
