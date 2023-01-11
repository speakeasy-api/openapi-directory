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
exports.ListCustomDescriptorsResponse = exports.ListCustomDescriptorsRequest = exports.ListCustomDescriptorsSecurity = exports.ListCustomDescriptorsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListCustomDescriptorsQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomDescriptorsQueryParams, _super);
    function ListCustomDescriptorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band_id" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "bandId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band_name" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "bandName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], ListCustomDescriptorsQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instrument_id" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "instrumentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instrument_name" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "instrumentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=render_speed_over" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "renderSpeedOver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], ListCustomDescriptorsQueryParams.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tempo" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "tempo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tempo_from" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "tempoFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tempo_to" }),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsQueryParams.prototype, "tempoTo", void 0);
    return ListCustomDescriptorsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCustomDescriptorsQueryParams = ListCustomDescriptorsQueryParams;
var ListCustomDescriptorsSecurity = /** @class */ (function (_super) {
    __extends(ListCustomDescriptorsSecurity, _super);
    function ListCustomDescriptorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], ListCustomDescriptorsSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], ListCustomDescriptorsSecurity.prototype, "customerAccessCode", void 0);
    return ListCustomDescriptorsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCustomDescriptorsSecurity = ListCustomDescriptorsSecurity;
var ListCustomDescriptorsRequest = /** @class */ (function (_super) {
    __extends(ListCustomDescriptorsRequest, _super);
    function ListCustomDescriptorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomDescriptorsQueryParams)
    ], ListCustomDescriptorsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomDescriptorsSecurity)
    ], ListCustomDescriptorsRequest.prototype, "security", void 0);
    return ListCustomDescriptorsRequest;
}(utils_1.SpeakeasyBase));
exports.ListCustomDescriptorsRequest = ListCustomDescriptorsRequest;
var ListCustomDescriptorsResponse = /** @class */ (function (_super) {
    __extends(ListCustomDescriptorsResponse, _super);
    function ListCustomDescriptorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCustomDescriptorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescriptorsListResult)
    ], ListCustomDescriptorsResponse.prototype, "descriptorsListResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCustomDescriptorsResponse.prototype, "statusCode", void 0);
    return ListCustomDescriptorsResponse;
}(utils_1.SpeakeasyBase));
exports.ListCustomDescriptorsResponse = ListCustomDescriptorsResponse;
