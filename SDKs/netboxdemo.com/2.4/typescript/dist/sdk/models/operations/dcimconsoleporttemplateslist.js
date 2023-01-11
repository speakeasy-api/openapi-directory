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
exports.DcimConsolePortTemplatesListResponse = exports.DcimConsolePortTemplatesListRequest = exports.DcimConsolePortTemplatesList200ApplicationJson = exports.DcimConsolePortTemplatesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DcimConsolePortTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimConsolePortTemplatesListQueryParams, _super);
    function DcimConsolePortTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devicetype_id" }),
        __metadata("design:type", String)
    ], DcimConsolePortTemplatesListQueryParams.prototype, "devicetypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimConsolePortTemplatesListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimConsolePortTemplatesListQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimConsolePortTemplatesListQueryParams.prototype, "offset", void 0);
    return DcimConsolePortTemplatesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DcimConsolePortTemplatesListQueryParams = DcimConsolePortTemplatesListQueryParams;
var DcimConsolePortTemplatesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimConsolePortTemplatesList200ApplicationJson, _super);
    function DcimConsolePortTemplatesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimConsolePortTemplatesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimConsolePortTemplatesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimConsolePortTemplatesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ConsolePortTemplate }),
        __metadata("design:type", Array)
    ], DcimConsolePortTemplatesList200ApplicationJson.prototype, "results", void 0);
    return DcimConsolePortTemplatesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DcimConsolePortTemplatesList200ApplicationJson = DcimConsolePortTemplatesList200ApplicationJson;
var DcimConsolePortTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DcimConsolePortTemplatesListRequest, _super);
    function DcimConsolePortTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsolePortTemplatesListQueryParams)
    ], DcimConsolePortTemplatesListRequest.prototype, "queryParams", void 0);
    return DcimConsolePortTemplatesListRequest;
}(utils_1.SpeakeasyBase));
exports.DcimConsolePortTemplatesListRequest = DcimConsolePortTemplatesListRequest;
var DcimConsolePortTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DcimConsolePortTemplatesListResponse, _super);
    function DcimConsolePortTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DcimConsolePortTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DcimConsolePortTemplatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsolePortTemplatesList200ApplicationJson)
    ], DcimConsolePortTemplatesListResponse.prototype, "dcimConsolePortTemplatesList200ApplicationJSONObject", void 0);
    return DcimConsolePortTemplatesListResponse;
}(utils_1.SpeakeasyBase));
exports.DcimConsolePortTemplatesListResponse = DcimConsolePortTemplatesListResponse;
