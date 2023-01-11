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
exports.DeleteDataSourceResponse = exports.DeleteDataSourceRequest = exports.DeleteDataSource200ApplicationJson = exports.DeleteDataSource200ApplicationJsonResultEnum = exports.DeleteDataSource200ApplicationJsonData = exports.DeleteDataSource200ApplicationJsonActionEnum = exports.DeleteDataSourcePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteDataSourcePathParams = /** @class */ (function (_super) {
    __extends(DeleteDataSourcePathParams, _super);
    function DeleteDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=datasourceId" }),
        __metadata("design:type", String)
    ], DeleteDataSourcePathParams.prototype, "datasourceId", void 0);
    return DeleteDataSourcePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteDataSourcePathParams = DeleteDataSourcePathParams;
var DeleteDataSource200ApplicationJsonActionEnum;
(function (DeleteDataSource200ApplicationJsonActionEnum) {
    DeleteDataSource200ApplicationJsonActionEnum["DeleteDataSource"] = "deleteDataSource";
})(DeleteDataSource200ApplicationJsonActionEnum = exports.DeleteDataSource200ApplicationJsonActionEnum || (exports.DeleteDataSource200ApplicationJsonActionEnum = {}));
var DeleteDataSource200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteDataSource200ApplicationJsonData, _super);
    function DeleteDataSource200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], DeleteDataSource200ApplicationJsonData.prototype, "datasources", void 0);
    return DeleteDataSource200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.DeleteDataSource200ApplicationJsonData = DeleteDataSource200ApplicationJsonData;
var DeleteDataSource200ApplicationJsonResultEnum;
(function (DeleteDataSource200ApplicationJsonResultEnum) {
    DeleteDataSource200ApplicationJsonResultEnum["Success"] = "success";
    DeleteDataSource200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteDataSource200ApplicationJsonResultEnum = exports.DeleteDataSource200ApplicationJsonResultEnum || (exports.DeleteDataSource200ApplicationJsonResultEnum = {}));
var DeleteDataSource200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataSource200ApplicationJson, _super);
    function DeleteDataSource200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteDataSource200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", DeleteDataSource200ApplicationJsonData)
    ], DeleteDataSource200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteDataSource200ApplicationJson.prototype, "result", void 0);
    return DeleteDataSource200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteDataSource200ApplicationJson = DeleteDataSource200ApplicationJson;
var DeleteDataSourceRequest = /** @class */ (function (_super) {
    __extends(DeleteDataSourceRequest, _super);
    function DeleteDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDataSourcePathParams)
    ], DeleteDataSourceRequest.prototype, "pathParams", void 0);
    return DeleteDataSourceRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteDataSourceRequest = DeleteDataSourceRequest;
var DeleteDataSourceResponse = /** @class */ (function (_super) {
    __extends(DeleteDataSourceResponse, _super);
    function DeleteDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDataSource200ApplicationJson)
    ], DeleteDataSourceResponse.prototype, "deleteDataSource200ApplicationJSONObject", void 0);
    return DeleteDataSourceResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteDataSourceResponse = DeleteDataSourceResponse;
