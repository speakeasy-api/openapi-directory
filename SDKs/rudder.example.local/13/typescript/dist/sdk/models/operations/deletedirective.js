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
exports.DeleteDirectiveResponse = exports.DeleteDirectiveRequest = exports.DeleteDirective200ApplicationJson = exports.DeleteDirective200ApplicationJsonResultEnum = exports.DeleteDirective200ApplicationJsonData = exports.DeleteDirective200ApplicationJsonActionEnum = exports.DeleteDirectivePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteDirectivePathParams = /** @class */ (function (_super) {
    __extends(DeleteDirectivePathParams, _super);
    function DeleteDirectivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], DeleteDirectivePathParams.prototype, "directiveId", void 0);
    return DeleteDirectivePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteDirectivePathParams = DeleteDirectivePathParams;
var DeleteDirective200ApplicationJsonActionEnum;
(function (DeleteDirective200ApplicationJsonActionEnum) {
    DeleteDirective200ApplicationJsonActionEnum["DeleteDirective"] = "deleteDirective";
})(DeleteDirective200ApplicationJsonActionEnum = exports.DeleteDirective200ApplicationJsonActionEnum || (exports.DeleteDirective200ApplicationJsonActionEnum = {}));
var DeleteDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteDirective200ApplicationJsonData, _super);
    function DeleteDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], DeleteDirective200ApplicationJsonData.prototype, "directives", void 0);
    return DeleteDirective200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.DeleteDirective200ApplicationJsonData = DeleteDirective200ApplicationJsonData;
var DeleteDirective200ApplicationJsonResultEnum;
(function (DeleteDirective200ApplicationJsonResultEnum) {
    DeleteDirective200ApplicationJsonResultEnum["Success"] = "success";
    DeleteDirective200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteDirective200ApplicationJsonResultEnum = exports.DeleteDirective200ApplicationJsonResultEnum || (exports.DeleteDirective200ApplicationJsonResultEnum = {}));
var DeleteDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDirective200ApplicationJson, _super);
    function DeleteDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", DeleteDirective200ApplicationJsonData)
    ], DeleteDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteDirective200ApplicationJson.prototype, "result", void 0);
    return DeleteDirective200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteDirective200ApplicationJson = DeleteDirective200ApplicationJson;
var DeleteDirectiveRequest = /** @class */ (function (_super) {
    __extends(DeleteDirectiveRequest, _super);
    function DeleteDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDirectivePathParams)
    ], DeleteDirectiveRequest.prototype, "pathParams", void 0);
    return DeleteDirectiveRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteDirectiveRequest = DeleteDirectiveRequest;
var DeleteDirectiveResponse = /** @class */ (function (_super) {
    __extends(DeleteDirectiveResponse, _super);
    function DeleteDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDirective200ApplicationJson)
    ], DeleteDirectiveResponse.prototype, "deleteDirective200ApplicationJSONObject", void 0);
    return DeleteDirectiveResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteDirectiveResponse = DeleteDirectiveResponse;
