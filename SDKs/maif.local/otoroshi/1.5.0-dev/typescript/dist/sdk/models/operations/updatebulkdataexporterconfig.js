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
exports.UpdateBulkDataExporterConfigResponse = exports.UpdateBulkDataExporterConfigRequest = exports.UpdateBulkDataExporterConfig200ApplicationJson = exports.UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum = exports.UpdateBulkDataExporterConfigSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBulkDataExporterConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateBulkDataExporterConfigSecurity, _super);
    function UpdateBulkDataExporterConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], UpdateBulkDataExporterConfigSecurity.prototype, "otoroshiAuth", void 0);
    return UpdateBulkDataExporterConfigSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateBulkDataExporterConfigSecurity = UpdateBulkDataExporterConfigSecurity;
var UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum;
(function (UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum) {
    UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum["TwoHundred"] = "200";
})(UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum = exports.UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum || (exports.UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum = {}));
// UpdateBulkDataExporterConfig200ApplicationJson
/**
 * The bulk response
**/
var UpdateBulkDataExporterConfig200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateBulkDataExporterConfig200ApplicationJson, _super);
    function UpdateBulkDataExporterConfig200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Boolean)
    ], UpdateBulkDataExporterConfig200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateBulkDataExporterConfig200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", Boolean)
    ], UpdateBulkDataExporterConfig200ApplicationJson.prototype, "updated", void 0);
    return UpdateBulkDataExporterConfig200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateBulkDataExporterConfig200ApplicationJson = UpdateBulkDataExporterConfig200ApplicationJson;
var UpdateBulkDataExporterConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateBulkDataExporterConfigRequest, _super);
    function UpdateBulkDataExporterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/ndjson" }),
        __metadata("design:type", shared.DataExporterConfig)
    ], UpdateBulkDataExporterConfigRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBulkDataExporterConfigSecurity)
    ], UpdateBulkDataExporterConfigRequest.prototype, "security", void 0);
    return UpdateBulkDataExporterConfigRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBulkDataExporterConfigRequest = UpdateBulkDataExporterConfigRequest;
var UpdateBulkDataExporterConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateBulkDataExporterConfigResponse, _super);
    function UpdateBulkDataExporterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBulkDataExporterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBulkDataExporterConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: UpdateBulkDataExporterConfig200ApplicationJson }),
        __metadata("design:type", Array)
    ], UpdateBulkDataExporterConfigResponse.prototype, "updateBulkDataExporterConfig200ApplicationJSONObjects", void 0);
    return UpdateBulkDataExporterConfigResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBulkDataExporterConfigResponse = UpdateBulkDataExporterConfigResponse;
