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
exports.DcimConsoleServerPortTemplatesListResponse = exports.DcimConsoleServerPortTemplatesListRequest = exports.DcimConsoleServerPortTemplatesList200ApplicationJson = exports.DcimConsoleServerPortTemplatesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DcimConsoleServerPortTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortTemplatesListQueryParams, _super);
    function DcimConsoleServerPortTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devicetype_id" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "devicetypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devicetype_id__n" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "devicetypeIdN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "idN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type__n" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListQueryParams.prototype, "typeN", void 0);
    return DcimConsoleServerPortTemplatesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleServerPortTemplatesListQueryParams = DcimConsoleServerPortTemplatesListQueryParams;
var DcimConsoleServerPortTemplatesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortTemplatesList200ApplicationJson, _super);
    function DcimConsoleServerPortTemplatesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortTemplatesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ConsoleServerPortTemplate }),
        __metadata("design:type", Array)
    ], DcimConsoleServerPortTemplatesList200ApplicationJson.prototype, "results", void 0);
    return DcimConsoleServerPortTemplatesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleServerPortTemplatesList200ApplicationJson = DcimConsoleServerPortTemplatesList200ApplicationJson;
var DcimConsoleServerPortTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortTemplatesListRequest, _super);
    function DcimConsoleServerPortTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsoleServerPortTemplatesListQueryParams)
    ], DcimConsoleServerPortTemplatesListRequest.prototype, "queryParams", void 0);
    return DcimConsoleServerPortTemplatesListRequest;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleServerPortTemplatesListRequest = DcimConsoleServerPortTemplatesListRequest;
var DcimConsoleServerPortTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortTemplatesListResponse, _super);
    function DcimConsoleServerPortTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DcimConsoleServerPortTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortTemplatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsoleServerPortTemplatesList200ApplicationJson)
    ], DcimConsoleServerPortTemplatesListResponse.prototype, "dcimConsoleServerPortTemplatesList200ApplicationJSONObject", void 0);
    return DcimConsoleServerPortTemplatesListResponse;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleServerPortTemplatesListResponse = DcimConsoleServerPortTemplatesListResponse;
