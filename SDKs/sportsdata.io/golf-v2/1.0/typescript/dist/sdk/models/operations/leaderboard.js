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
exports.LeaderboardResponse = exports.LeaderboardRequest = exports.LeaderboardPathParams = exports.LeaderboardFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LeaderboardFormatEnum;
(function (LeaderboardFormatEnum) {
    LeaderboardFormatEnum["Xml"] = "XML";
    LeaderboardFormatEnum["Json"] = "JSON";
})(LeaderboardFormatEnum = exports.LeaderboardFormatEnum || (exports.LeaderboardFormatEnum = {}));
var LeaderboardPathParams = /** @class */ (function (_super) {
    __extends(LeaderboardPathParams, _super);
    function LeaderboardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], LeaderboardPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tournamentid" }),
        __metadata("design:type", String)
    ], LeaderboardPathParams.prototype, "tournamentid", void 0);
    return LeaderboardPathParams;
}(utils_1.SpeakeasyBase));
exports.LeaderboardPathParams = LeaderboardPathParams;
var LeaderboardRequest = /** @class */ (function (_super) {
    __extends(LeaderboardRequest, _super);
    function LeaderboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LeaderboardPathParams)
    ], LeaderboardRequest.prototype, "pathParams", void 0);
    return LeaderboardRequest;
}(utils_1.SpeakeasyBase));
exports.LeaderboardRequest = LeaderboardRequest;
var LeaderboardResponse = /** @class */ (function (_super) {
    __extends(LeaderboardResponse, _super);
    function LeaderboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LeaderboardResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], LeaderboardResponse.prototype, "leaderboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LeaderboardResponse.prototype, "statusCode", void 0);
    return LeaderboardResponse;
}(utils_1.SpeakeasyBase));
exports.LeaderboardResponse = LeaderboardResponse;
