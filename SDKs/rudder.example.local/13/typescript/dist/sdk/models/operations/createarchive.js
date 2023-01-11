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
exports.CreateArchiveResponse = exports.CreateArchiveRequest = exports.CreateArchive200ApplicationJson = exports.CreateArchive200ApplicationJsonResultEnum = exports.CreateArchive200ApplicationJsonData = exports.CreateArchive200ApplicationJsonDataFull = exports.CreateArchive200ApplicationJsonActionEnum = exports.CreateArchivePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateArchivePathParams = /** @class */ (function (_super) {
    __extends(CreateArchivePathParams, _super);
    function CreateArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=archiveKind" }),
        __metadata("design:type", String)
    ], CreateArchivePathParams.prototype, "archiveKind", void 0);
    return CreateArchivePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateArchivePathParams = CreateArchivePathParams;
var CreateArchive200ApplicationJsonActionEnum;
(function (CreateArchive200ApplicationJsonActionEnum) {
    CreateArchive200ApplicationJsonActionEnum["ArchiveFull"] = "archiveFull";
    CreateArchive200ApplicationJsonActionEnum["ArchiveGroups"] = "archiveGroups";
    CreateArchive200ApplicationJsonActionEnum["ArchiveRules"] = "archiveRules";
    CreateArchive200ApplicationJsonActionEnum["ArchiveDirectives"] = "archiveDirectives";
    CreateArchive200ApplicationJsonActionEnum["ArchiveParameters"] = "archiveParameters";
})(CreateArchive200ApplicationJsonActionEnum = exports.CreateArchive200ApplicationJsonActionEnum || (exports.CreateArchive200ApplicationJsonActionEnum = {}));
var CreateArchive200ApplicationJsonDataFull = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJsonDataFull, _super);
    function CreateArchive200ApplicationJsonDataFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commiter" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "commiter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitCommit" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "gitCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "id", void 0);
    return CreateArchive200ApplicationJsonDataFull;
}(utils_1.SpeakeasyBase));
exports.CreateArchive200ApplicationJsonDataFull = CreateArchive200ApplicationJsonDataFull;
var CreateArchive200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJsonData, _super);
    function CreateArchive200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full" }),
        __metadata("design:type", CreateArchive200ApplicationJsonDataFull)
    ], CreateArchive200ApplicationJsonData.prototype, "full", void 0);
    return CreateArchive200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.CreateArchive200ApplicationJsonData = CreateArchive200ApplicationJsonData;
var CreateArchive200ApplicationJsonResultEnum;
(function (CreateArchive200ApplicationJsonResultEnum) {
    CreateArchive200ApplicationJsonResultEnum["Success"] = "success";
    CreateArchive200ApplicationJsonResultEnum["Error"] = "error";
})(CreateArchive200ApplicationJsonResultEnum = exports.CreateArchive200ApplicationJsonResultEnum || (exports.CreateArchive200ApplicationJsonResultEnum = {}));
var CreateArchive200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJson, _super);
    function CreateArchive200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", CreateArchive200ApplicationJsonData)
    ], CreateArchive200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJson.prototype, "result", void 0);
    return CreateArchive200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateArchive200ApplicationJson = CreateArchive200ApplicationJson;
var CreateArchiveRequest = /** @class */ (function (_super) {
    __extends(CreateArchiveRequest, _super);
    function CreateArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateArchivePathParams)
    ], CreateArchiveRequest.prototype, "pathParams", void 0);
    return CreateArchiveRequest;
}(utils_1.SpeakeasyBase));
exports.CreateArchiveRequest = CreateArchiveRequest;
var CreateArchiveResponse = /** @class */ (function (_super) {
    __extends(CreateArchiveResponse, _super);
    function CreateArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateArchiveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateArchive200ApplicationJson)
    ], CreateArchiveResponse.prototype, "createArchive200ApplicationJSONObject", void 0);
    return CreateArchiveResponse;
}(utils_1.SpeakeasyBase));
exports.CreateArchiveResponse = CreateArchiveResponse;
