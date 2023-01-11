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
exports.UpdateDirectiveResponse = exports.UpdateDirectiveRequest = exports.UpdateDirective200ApplicationJson = exports.UpdateDirective200ApplicationJsonResultEnum = exports.UpdateDirective200ApplicationJsonData = exports.UpdateDirective200ApplicationJsonActionEnum = exports.UpdateDirectivePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateDirectivePathParams = /** @class */ (function (_super) {
    __extends(UpdateDirectivePathParams, _super);
    function UpdateDirectivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], UpdateDirectivePathParams.prototype, "directiveId", void 0);
    return UpdateDirectivePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDirectivePathParams = UpdateDirectivePathParams;
var UpdateDirective200ApplicationJsonActionEnum;
(function (UpdateDirective200ApplicationJsonActionEnum) {
    UpdateDirective200ApplicationJsonActionEnum["UpdateDirective"] = "updateDirective";
})(UpdateDirective200ApplicationJsonActionEnum = exports.UpdateDirective200ApplicationJsonActionEnum || (exports.UpdateDirective200ApplicationJsonActionEnum = {}));
var UpdateDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateDirective200ApplicationJsonData, _super);
    function UpdateDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], UpdateDirective200ApplicationJsonData.prototype, "directives", void 0);
    return UpdateDirective200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.UpdateDirective200ApplicationJsonData = UpdateDirective200ApplicationJsonData;
var UpdateDirective200ApplicationJsonResultEnum;
(function (UpdateDirective200ApplicationJsonResultEnum) {
    UpdateDirective200ApplicationJsonResultEnum["Success"] = "success";
    UpdateDirective200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateDirective200ApplicationJsonResultEnum = exports.UpdateDirective200ApplicationJsonResultEnum || (exports.UpdateDirective200ApplicationJsonResultEnum = {}));
var UpdateDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDirective200ApplicationJson, _super);
    function UpdateDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", UpdateDirective200ApplicationJsonData)
    ], UpdateDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateDirective200ApplicationJson.prototype, "result", void 0);
    return UpdateDirective200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateDirective200ApplicationJson = UpdateDirective200ApplicationJson;
var UpdateDirectiveRequest = /** @class */ (function (_super) {
    __extends(UpdateDirectiveRequest, _super);
    function UpdateDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDirectivePathParams)
    ], UpdateDirectiveRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Directive)
    ], UpdateDirectiveRequest.prototype, "request", void 0);
    return UpdateDirectiveRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDirectiveRequest = UpdateDirectiveRequest;
var UpdateDirectiveResponse = /** @class */ (function (_super) {
    __extends(UpdateDirectiveResponse, _super);
    function UpdateDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDirective200ApplicationJson)
    ], UpdateDirectiveResponse.prototype, "updateDirective200ApplicationJSONObject", void 0);
    return UpdateDirectiveResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDirectiveResponse = UpdateDirectiveResponse;
