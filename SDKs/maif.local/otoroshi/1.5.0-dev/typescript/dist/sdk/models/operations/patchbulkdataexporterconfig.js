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
exports.PatchBulkDataExporterConfigResponse = exports.PatchBulkDataExporterConfigRequest = exports.PatchBulkDataExporterConfig200ApplicationJson = exports.PatchBulkDataExporterConfig200ApplicationJsonStatusEnum = exports.PatchBulkDataExporterConfigSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchBulkDataExporterConfigSecurity = /** @class */ (function (_super) {
    __extends(PatchBulkDataExporterConfigSecurity, _super);
    function PatchBulkDataExporterConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], PatchBulkDataExporterConfigSecurity.prototype, "otoroshiAuth", void 0);
    return PatchBulkDataExporterConfigSecurity;
}(utils_1.SpeakeasyBase));
exports.PatchBulkDataExporterConfigSecurity = PatchBulkDataExporterConfigSecurity;
var PatchBulkDataExporterConfig200ApplicationJsonStatusEnum;
(function (PatchBulkDataExporterConfig200ApplicationJsonStatusEnum) {
    PatchBulkDataExporterConfig200ApplicationJsonStatusEnum["TwoHundred"] = "200";
})(PatchBulkDataExporterConfig200ApplicationJsonStatusEnum = exports.PatchBulkDataExporterConfig200ApplicationJsonStatusEnum || (exports.PatchBulkDataExporterConfig200ApplicationJsonStatusEnum = {}));
// PatchBulkDataExporterConfig200ApplicationJson
/**
 * The bulk response
**/
var PatchBulkDataExporterConfig200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchBulkDataExporterConfig200ApplicationJson, _super);
    function PatchBulkDataExporterConfig200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Boolean)
    ], PatchBulkDataExporterConfig200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PatchBulkDataExporterConfig200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", Boolean)
    ], PatchBulkDataExporterConfig200ApplicationJson.prototype, "updated", void 0);
    return PatchBulkDataExporterConfig200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchBulkDataExporterConfig200ApplicationJson = PatchBulkDataExporterConfig200ApplicationJson;
var PatchBulkDataExporterConfigRequest = /** @class */ (function (_super) {
    __extends(PatchBulkDataExporterConfigRequest, _super);
    function PatchBulkDataExporterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/ndjson", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], PatchBulkDataExporterConfigRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchBulkDataExporterConfigSecurity)
    ], PatchBulkDataExporterConfigRequest.prototype, "security", void 0);
    return PatchBulkDataExporterConfigRequest;
}(utils_1.SpeakeasyBase));
exports.PatchBulkDataExporterConfigRequest = PatchBulkDataExporterConfigRequest;
var PatchBulkDataExporterConfigResponse = /** @class */ (function (_super) {
    __extends(PatchBulkDataExporterConfigResponse, _super);
    function PatchBulkDataExporterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchBulkDataExporterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchBulkDataExporterConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: PatchBulkDataExporterConfig200ApplicationJson }),
        __metadata("design:type", Array)
    ], PatchBulkDataExporterConfigResponse.prototype, "patchBulkDataExporterConfig200ApplicationJSONObjects", void 0);
    return PatchBulkDataExporterConfigResponse;
}(utils_1.SpeakeasyBase));
exports.PatchBulkDataExporterConfigResponse = PatchBulkDataExporterConfigResponse;
