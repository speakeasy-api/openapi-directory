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
exports.DcimRackRolesListResponse = exports.DcimRackRolesListRequest = exports.DcimRackRolesList200ApplicationJson = exports.DcimRackRolesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DcimRackRolesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimRackRolesListQueryParams, _super);
    function DcimRackRolesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], DcimRackRolesListQueryParams.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimRackRolesListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimRackRolesListQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimRackRolesListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimRackRolesListQueryParams.prototype, "slug", void 0);
    return DcimRackRolesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DcimRackRolesListQueryParams = DcimRackRolesListQueryParams;
var DcimRackRolesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimRackRolesList200ApplicationJson, _super);
    function DcimRackRolesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimRackRolesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimRackRolesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimRackRolesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.RackRole }),
        __metadata("design:type", Array)
    ], DcimRackRolesList200ApplicationJson.prototype, "results", void 0);
    return DcimRackRolesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DcimRackRolesList200ApplicationJson = DcimRackRolesList200ApplicationJson;
var DcimRackRolesListRequest = /** @class */ (function (_super) {
    __extends(DcimRackRolesListRequest, _super);
    function DcimRackRolesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimRackRolesListQueryParams)
    ], DcimRackRolesListRequest.prototype, "queryParams", void 0);
    return DcimRackRolesListRequest;
}(utils_1.SpeakeasyBase));
exports.DcimRackRolesListRequest = DcimRackRolesListRequest;
var DcimRackRolesListResponse = /** @class */ (function (_super) {
    __extends(DcimRackRolesListResponse, _super);
    function DcimRackRolesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DcimRackRolesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DcimRackRolesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimRackRolesList200ApplicationJson)
    ], DcimRackRolesListResponse.prototype, "dcimRackRolesList200ApplicationJSONObject", void 0);
    return DcimRackRolesListResponse;
}(utils_1.SpeakeasyBase));
exports.DcimRackRolesListResponse = DcimRackRolesListResponse;
