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
exports.CalendarEventsPatchResponse = exports.CalendarEventsPatchRequest = exports.CalendarEventsPatchSecurity = exports.CalendarEventsPatchSecurityOption2 = exports.CalendarEventsPatchSecurityOption1 = exports.CalendarEventsPatchQueryParams = exports.CalendarEventsPatchSendUpdatesEnum = exports.CalendarEventsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CalendarEventsPatchPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchPathParams, _super);
    function CalendarEventsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchPathParams.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchPathParams.prototype, "eventId", void 0);
    return CalendarEventsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchPathParams = CalendarEventsPatchPathParams;
var CalendarEventsPatchSendUpdatesEnum;
(function (CalendarEventsPatchSendUpdatesEnum) {
    CalendarEventsPatchSendUpdatesEnum["All"] = "all";
    CalendarEventsPatchSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsPatchSendUpdatesEnum["None"] = "none";
})(CalendarEventsPatchSendUpdatesEnum = exports.CalendarEventsPatchSendUpdatesEnum || (exports.CalendarEventsPatchSendUpdatesEnum = {}));
var CalendarEventsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchQueryParams, _super);
    function CalendarEventsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsPatchQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" }),
        __metadata("design:type", Number)
    ], CalendarEventsPatchQueryParams.prototype, "conferenceDataVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsPatchQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsPatchQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsAttachments" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsPatchQueryParams.prototype, "supportsAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsPatchQueryParams.prototype, "userIp", void 0);
    return CalendarEventsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchQueryParams = CalendarEventsPatchQueryParams;
var CalendarEventsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchSecurityOption1, _super);
    function CalendarEventsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsPatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchSecurityOption1 = CalendarEventsPatchSecurityOption1;
var CalendarEventsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchSecurityOption2, _super);
    function CalendarEventsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsPatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchSecurityOption2 = CalendarEventsPatchSecurityOption2;
var CalendarEventsPatchSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchSecurity, _super);
    function CalendarEventsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsPatchSecurityOption1)
    ], CalendarEventsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsPatchSecurityOption2)
    ], CalendarEventsPatchSecurity.prototype, "option2", void 0);
    return CalendarEventsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchSecurity = CalendarEventsPatchSecurity;
var CalendarEventsPatchRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchRequest, _super);
    function CalendarEventsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsPatchPathParams)
    ], CalendarEventsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsPatchQueryParams)
    ], CalendarEventsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Event)
    ], CalendarEventsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsPatchSecurity)
    ], CalendarEventsPatchRequest.prototype, "security", void 0);
    return CalendarEventsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchRequest = CalendarEventsPatchRequest;
var CalendarEventsPatchResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsPatchResponse, _super);
    function CalendarEventsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CalendarEventsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsPatchResponse.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CalendarEventsPatchResponse.prototype, "statusCode", void 0);
    return CalendarEventsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsPatchResponse = CalendarEventsPatchResponse;
