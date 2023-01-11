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
exports.CalendarEventsQuickAddResponse = exports.CalendarEventsQuickAddRequest = exports.CalendarEventsQuickAddSecurity = exports.CalendarEventsQuickAddSecurityOption2 = exports.CalendarEventsQuickAddSecurityOption1 = exports.CalendarEventsQuickAddQueryParams = exports.CalendarEventsQuickAddSendUpdatesEnum = exports.CalendarEventsQuickAddPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CalendarEventsQuickAddPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddPathParams, _super);
    function CalendarEventsQuickAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddPathParams.prototype, "calendarId", void 0);
    return CalendarEventsQuickAddPathParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddPathParams = CalendarEventsQuickAddPathParams;
var CalendarEventsQuickAddSendUpdatesEnum;
(function (CalendarEventsQuickAddSendUpdatesEnum) {
    CalendarEventsQuickAddSendUpdatesEnum["All"] = "all";
    CalendarEventsQuickAddSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsQuickAddSendUpdatesEnum["None"] = "none";
})(CalendarEventsQuickAddSendUpdatesEnum = exports.CalendarEventsQuickAddSendUpdatesEnum || (exports.CalendarEventsQuickAddSendUpdatesEnum = {}));
var CalendarEventsQuickAddQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddQueryParams, _super);
    function CalendarEventsQuickAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsQuickAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsQuickAddQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddQueryParams.prototype, "userIp", void 0);
    return CalendarEventsQuickAddQueryParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddQueryParams = CalendarEventsQuickAddQueryParams;
var CalendarEventsQuickAddSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddSecurityOption1, _super);
    function CalendarEventsQuickAddSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsQuickAddSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsQuickAddSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsQuickAddSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddSecurityOption1 = CalendarEventsQuickAddSecurityOption1;
var CalendarEventsQuickAddSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddSecurityOption2, _super);
    function CalendarEventsQuickAddSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsQuickAddSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsQuickAddSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsQuickAddSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddSecurityOption2 = CalendarEventsQuickAddSecurityOption2;
var CalendarEventsQuickAddSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddSecurity, _super);
    function CalendarEventsQuickAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsQuickAddSecurityOption1)
    ], CalendarEventsQuickAddSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsQuickAddSecurityOption2)
    ], CalendarEventsQuickAddSecurity.prototype, "option2", void 0);
    return CalendarEventsQuickAddSecurity;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddSecurity = CalendarEventsQuickAddSecurity;
var CalendarEventsQuickAddRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddRequest, _super);
    function CalendarEventsQuickAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsQuickAddPathParams)
    ], CalendarEventsQuickAddRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsQuickAddQueryParams)
    ], CalendarEventsQuickAddRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsQuickAddSecurity)
    ], CalendarEventsQuickAddRequest.prototype, "security", void 0);
    return CalendarEventsQuickAddRequest;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddRequest = CalendarEventsQuickAddRequest;
var CalendarEventsQuickAddResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsQuickAddResponse, _super);
    function CalendarEventsQuickAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CalendarEventsQuickAddResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsQuickAddResponse.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CalendarEventsQuickAddResponse.prototype, "statusCode", void 0);
    return CalendarEventsQuickAddResponse;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsQuickAddResponse = CalendarEventsQuickAddResponse;
