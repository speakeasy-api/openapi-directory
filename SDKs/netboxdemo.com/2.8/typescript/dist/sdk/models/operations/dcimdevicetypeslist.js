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
exports.DcimDeviceTypesListResponse = exports.DcimDeviceTypesListRequest = exports.DcimDeviceTypesList200ApplicationJson = exports.DcimDeviceTypesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DcimDeviceTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListQueryParams, _super);
    function DcimDeviceTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=console_ports" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "consolePorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=console_server_ports" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "consoleServerPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device_bays" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "deviceBays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=interfaces" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "interfaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=is_full_depth" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "isFullDepth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=manufacturer" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=manufacturer__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturerN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=manufacturer_id" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturerIdN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelIc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelIe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelIew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelIsw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelNic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelNie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelNiew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "modelNisw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberIc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberIe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberIew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberIsw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberNic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberNie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberNiew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumberNisw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pass_through_ports" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "passThroughPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=power_outlets" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "powerOutlets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=power_ports" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "powerPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slugNisw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subdevice_role" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "subdeviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subdevice_role__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "subdeviceRoleN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "tagN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height__gt" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeightGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height__gte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeightGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height__lt" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeightLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height__lte" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeightLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=u_height__n" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeightN", void 0);
    return DcimDeviceTypesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DcimDeviceTypesListQueryParams = DcimDeviceTypesListQueryParams;
var DcimDeviceTypesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesList200ApplicationJson, _super);
    function DcimDeviceTypesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.DeviceType }),
        __metadata("design:type", Array)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "results", void 0);
    return DcimDeviceTypesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DcimDeviceTypesList200ApplicationJson = DcimDeviceTypesList200ApplicationJson;
var DcimDeviceTypesListRequest = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListRequest, _super);
    function DcimDeviceTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimDeviceTypesListQueryParams)
    ], DcimDeviceTypesListRequest.prototype, "queryParams", void 0);
    return DcimDeviceTypesListRequest;
}(utils_1.SpeakeasyBase));
exports.DcimDeviceTypesListRequest = DcimDeviceTypesListRequest;
var DcimDeviceTypesListResponse = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListResponse, _super);
    function DcimDeviceTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DcimDeviceTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimDeviceTypesList200ApplicationJson)
    ], DcimDeviceTypesListResponse.prototype, "dcimDeviceTypesList200ApplicationJSONObject", void 0);
    return DcimDeviceTypesListResponse;
}(utils_1.SpeakeasyBase));
exports.DcimDeviceTypesListResponse = DcimDeviceTypesListResponse;
