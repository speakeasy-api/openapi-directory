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
exports.DcimConsoleConnectionsListResponse = exports.DcimConsoleConnectionsListRequest = exports.DcimConsoleConnectionsList200ApplicationJson = exports.DcimConsoleConnectionsListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DcimConsoleConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimConsoleConnectionsListQueryParams, _super);
    function DcimConsoleConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=connection_status" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsListQueryParams.prototype, "connectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsListQueryParams.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimConsoleConnectionsListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsListQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimConsoleConnectionsListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsListQueryParams.prototype, "site", void 0);
    return DcimConsoleConnectionsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleConnectionsListQueryParams = DcimConsoleConnectionsListQueryParams;
var DcimConsoleConnectionsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimConsoleConnectionsList200ApplicationJson, _super);
    function DcimConsoleConnectionsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimConsoleConnectionsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ConsolePort }),
        __metadata("design:type", Array)
    ], DcimConsoleConnectionsList200ApplicationJson.prototype, "results", void 0);
    return DcimConsoleConnectionsList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleConnectionsList200ApplicationJson = DcimConsoleConnectionsList200ApplicationJson;
var DcimConsoleConnectionsListRequest = /** @class */ (function (_super) {
    __extends(DcimConsoleConnectionsListRequest, _super);
    function DcimConsoleConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsoleConnectionsListQueryParams)
    ], DcimConsoleConnectionsListRequest.prototype, "queryParams", void 0);
    return DcimConsoleConnectionsListRequest;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleConnectionsListRequest = DcimConsoleConnectionsListRequest;
var DcimConsoleConnectionsListResponse = /** @class */ (function (_super) {
    __extends(DcimConsoleConnectionsListResponse, _super);
    function DcimConsoleConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DcimConsoleConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DcimConsoleConnectionsListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DcimConsoleConnectionsList200ApplicationJson)
    ], DcimConsoleConnectionsListResponse.prototype, "dcimConsoleConnectionsList200ApplicationJSONObject", void 0);
    return DcimConsoleConnectionsListResponse;
}(utils_1.SpeakeasyBase));
exports.DcimConsoleConnectionsListResponse = DcimConsoleConnectionsListResponse;
