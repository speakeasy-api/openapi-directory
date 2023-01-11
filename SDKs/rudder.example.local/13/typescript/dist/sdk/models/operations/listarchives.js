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
exports.ListArchivesResponse = exports.ListArchivesRequest = exports.ListArchives200ApplicationJson = exports.ListArchives200ApplicationJsonResultEnum = exports.ListArchives200ApplicationJsonData = exports.ListArchives200ApplicationJsonDataFull = exports.ListArchives200ApplicationJsonActionEnum = exports.ListArchivesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListArchivesPathParams = /** @class */ (function (_super) {
    __extends(ListArchivesPathParams, _super);
    function ListArchivesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=archiveKind" }),
        __metadata("design:type", String)
    ], ListArchivesPathParams.prototype, "archiveKind", void 0);
    return ListArchivesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListArchivesPathParams = ListArchivesPathParams;
var ListArchives200ApplicationJsonActionEnum;
(function (ListArchives200ApplicationJsonActionEnum) {
    ListArchives200ApplicationJsonActionEnum["ArchiveFull"] = "archiveFull";
    ListArchives200ApplicationJsonActionEnum["ArchiveGroups"] = "archiveGroups";
    ListArchives200ApplicationJsonActionEnum["ArchiveRules"] = "archiveRules";
    ListArchives200ApplicationJsonActionEnum["ArchiveDirectives"] = "archiveDirectives";
    ListArchives200ApplicationJsonActionEnum["ArchiveParameters"] = "archiveParameters";
})(ListArchives200ApplicationJsonActionEnum = exports.ListArchives200ApplicationJsonActionEnum || (exports.ListArchives200ApplicationJsonActionEnum = {}));
var ListArchives200ApplicationJsonDataFull = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJsonDataFull, _super);
    function ListArchives200ApplicationJsonDataFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commiter" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "commiter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitCommit" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "gitCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "id", void 0);
    return ListArchives200ApplicationJsonDataFull;
}(utils_1.SpeakeasyBase));
exports.ListArchives200ApplicationJsonDataFull = ListArchives200ApplicationJsonDataFull;
var ListArchives200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJsonData, _super);
    function ListArchives200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full", elemType: ListArchives200ApplicationJsonDataFull }),
        __metadata("design:type", Array)
    ], ListArchives200ApplicationJsonData.prototype, "full", void 0);
    return ListArchives200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListArchives200ApplicationJsonData = ListArchives200ApplicationJsonData;
var ListArchives200ApplicationJsonResultEnum;
(function (ListArchives200ApplicationJsonResultEnum) {
    ListArchives200ApplicationJsonResultEnum["Success"] = "success";
    ListArchives200ApplicationJsonResultEnum["Error"] = "error";
})(ListArchives200ApplicationJsonResultEnum = exports.ListArchives200ApplicationJsonResultEnum || (exports.ListArchives200ApplicationJsonResultEnum = {}));
var ListArchives200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJson, _super);
    function ListArchives200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListArchives200ApplicationJsonData)
    ], ListArchives200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJson.prototype, "result", void 0);
    return ListArchives200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListArchives200ApplicationJson = ListArchives200ApplicationJson;
var ListArchivesRequest = /** @class */ (function (_super) {
    __extends(ListArchivesRequest, _super);
    function ListArchivesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListArchivesPathParams)
    ], ListArchivesRequest.prototype, "pathParams", void 0);
    return ListArchivesRequest;
}(utils_1.SpeakeasyBase));
exports.ListArchivesRequest = ListArchivesRequest;
var ListArchivesResponse = /** @class */ (function (_super) {
    __extends(ListArchivesResponse, _super);
    function ListArchivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListArchivesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListArchivesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListArchives200ApplicationJson)
    ], ListArchivesResponse.prototype, "listArchives200ApplicationJSONObject", void 0);
    return ListArchivesResponse;
}(utils_1.SpeakeasyBase));
exports.ListArchivesResponse = ListArchivesResponse;
