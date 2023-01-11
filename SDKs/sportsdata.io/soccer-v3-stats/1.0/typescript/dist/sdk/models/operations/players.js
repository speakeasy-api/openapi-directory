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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersResponse = exports.PlayersRequest = exports.PlayersPathParams = exports.PlayersFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayersFormatEnum;
(function (PlayersFormatEnum) {
    PlayersFormatEnum["Xml"] = "xml";
    PlayersFormatEnum["Json"] = "json";
})(PlayersFormatEnum = exports.PlayersFormatEnum || (exports.PlayersFormatEnum = {}));
var PlayersPathParams = /** @class */ (function (_super) {
    __extends(PlayersPathParams, _super);
    function PlayersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayersPathParams.prototype, "format", void 0);
    return PlayersPathParams;
}(utils_1.SpeakeasyBase));
exports.PlayersPathParams = PlayersPathParams;
var PlayersRequest = /** @class */ (function (_super) {
    __extends(PlayersRequest, _super);
    function PlayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlayersPathParams)
    ], PlayersRequest.prototype, "pathParams", void 0);
    return PlayersRequest;
}(utils_1.SpeakeasyBase));
exports.PlayersRequest = PlayersRequest;
var PlayersResponse = /** @class */ (function (_super) {
    __extends(PlayersResponse, _super);
    function PlayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlayersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PlayersResponse.prototype, "players", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlayersResponse.prototype, "statusCode", void 0);
    return PlayersResponse;
}(utils_1.SpeakeasyBase));
exports.PlayersResponse = PlayersResponse;
