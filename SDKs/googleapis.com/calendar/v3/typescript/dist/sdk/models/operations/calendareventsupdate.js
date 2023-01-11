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
exports.CalendarEventsUpdateResponse = exports.CalendarEventsUpdateRequest = exports.CalendarEventsUpdateSecurity = exports.CalendarEventsUpdateSecurityOption2 = exports.CalendarEventsUpdateSecurityOption1 = exports.CalendarEventsUpdateQueryParams = exports.CalendarEventsUpdateSendUpdatesEnum = exports.CalendarEventsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CalendarEventsUpdatePathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdatePathParams, _super);
    function CalendarEventsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdatePathParams.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdatePathParams.prototype, "eventId", void 0);
    return CalendarEventsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdatePathParams = CalendarEventsUpdatePathParams;
var CalendarEventsUpdateSendUpdatesEnum;
(function (CalendarEventsUpdateSendUpdatesEnum) {
    CalendarEventsUpdateSendUpdatesEnum["All"] = "all";
    CalendarEventsUpdateSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsUpdateSendUpdatesEnum["None"] = "none";
})(CalendarEventsUpdateSendUpdatesEnum = exports.CalendarEventsUpdateSendUpdatesEnum || (exports.CalendarEventsUpdateSendUpdatesEnum = {}));
var CalendarEventsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateQueryParams, _super);
    function CalendarEventsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsUpdateQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" }),
        __metadata("design:type", Number)
    ], CalendarEventsUpdateQueryParams.prototype, "conferenceDataVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsUpdateQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsUpdateQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsAttachments" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsUpdateQueryParams.prototype, "supportsAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsUpdateQueryParams.prototype, "userIp", void 0);
    return CalendarEventsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateQueryParams = CalendarEventsUpdateQueryParams;
var CalendarEventsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateSecurityOption1, _super);
    function CalendarEventsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsUpdateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateSecurityOption1 = CalendarEventsUpdateSecurityOption1;
var CalendarEventsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateSecurityOption2, _super);
    function CalendarEventsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsUpdateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateSecurityOption2 = CalendarEventsUpdateSecurityOption2;
var CalendarEventsUpdateSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateSecurity, _super);
    function CalendarEventsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsUpdateSecurityOption1)
    ], CalendarEventsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsUpdateSecurityOption2)
    ], CalendarEventsUpdateSecurity.prototype, "option2", void 0);
    return CalendarEventsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateSecurity = CalendarEventsUpdateSecurity;
var CalendarEventsUpdateRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateRequest, _super);
    function CalendarEventsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsUpdatePathParams)
    ], CalendarEventsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsUpdateQueryParams)
    ], CalendarEventsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Event)
    ], CalendarEventsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsUpdateSecurity)
    ], CalendarEventsUpdateRequest.prototype, "security", void 0);
    return CalendarEventsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateRequest = CalendarEventsUpdateRequest;
var CalendarEventsUpdateResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsUpdateResponse, _super);
    function CalendarEventsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CalendarEventsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsUpdateResponse.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CalendarEventsUpdateResponse.prototype, "statusCode", void 0);
    return CalendarEventsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsUpdateResponse = CalendarEventsUpdateResponse;
