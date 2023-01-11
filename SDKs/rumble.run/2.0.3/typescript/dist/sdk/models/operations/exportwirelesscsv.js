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
exports.ExportWirelessCsvResponse = exports.ExportWirelessCsvRequest = exports.ExportWirelessCsvSecurity = exports.ExportWirelessCsvQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExportWirelessCsvQueryParams = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvQueryParams, _super);
    function ExportWirelessCsvQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportWirelessCsvQueryParams.prototype, "search", void 0);
    return ExportWirelessCsvQueryParams;
}(utils_1.SpeakeasyBase));
exports.ExportWirelessCsvQueryParams = ExportWirelessCsvQueryParams;
var ExportWirelessCsvSecurity = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvSecurity, _super);
    function ExportWirelessCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportWirelessCsvSecurity.prototype, "bearerAuth", void 0);
    return ExportWirelessCsvSecurity;
}(utils_1.SpeakeasyBase));
exports.ExportWirelessCsvSecurity = ExportWirelessCsvSecurity;
var ExportWirelessCsvRequest = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvRequest, _super);
    function ExportWirelessCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExportWirelessCsvQueryParams)
    ], ExportWirelessCsvRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExportWirelessCsvSecurity)
    ], ExportWirelessCsvRequest.prototype, "security", void 0);
    return ExportWirelessCsvRequest;
}(utils_1.SpeakeasyBase));
exports.ExportWirelessCsvRequest = ExportWirelessCsvRequest;
var ExportWirelessCsvResponse = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvResponse, _super);
    function ExportWirelessCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExportWirelessCsvResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExportWirelessCsvResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ExportWirelessCsvResponse.prototype, "exportWirelessCSV200TextCSVBinaryString", void 0);
    return ExportWirelessCsvResponse;
}(utils_1.SpeakeasyBase));
exports.ExportWirelessCsvResponse = ExportWirelessCsvResponse;
