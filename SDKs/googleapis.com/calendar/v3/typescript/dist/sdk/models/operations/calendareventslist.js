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
exports.CalendarEventsListResponse = exports.CalendarEventsListRequest = exports.CalendarEventsListSecurity = exports.CalendarEventsListSecurityOption4 = exports.CalendarEventsListSecurityOption3 = exports.CalendarEventsListSecurityOption2 = exports.CalendarEventsListSecurityOption1 = exports.CalendarEventsListQueryParams = exports.CalendarEventsListOrderByEnum = exports.CalendarEventsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CalendarEventsListPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsListPathParams, _super);
    function CalendarEventsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsListPathParams.prototype, "calendarId", void 0);
    return CalendarEventsListPathParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListPathParams = CalendarEventsListPathParams;
var CalendarEventsListOrderByEnum;
(function (CalendarEventsListOrderByEnum) {
    CalendarEventsListOrderByEnum["StartTime"] = "startTime";
    CalendarEventsListOrderByEnum["Updated"] = "updated";
})(CalendarEventsListOrderByEnum = exports.CalendarEventsListOrderByEnum || (exports.CalendarEventsListOrderByEnum = {}));
var CalendarEventsListQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsListQueryParams, _super);
    function CalendarEventsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsListQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=iCalUID" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "iCalUID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsListQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarEventsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=privateExtendedProperty" }),
        __metadata("design:type", Array)
    ], CalendarEventsListQueryParams.prototype, "privateExtendedProperty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sharedExtendedProperty" }),
        __metadata("design:type", Array)
    ], CalendarEventsListQueryParams.prototype, "sharedExtendedProperty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showHiddenInvitations" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsListQueryParams.prototype, "showHiddenInvitations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=singleEvents" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsListQueryParams.prototype, "singleEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "syncToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeMax" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "timeMax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeMin" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "timeMin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedMin" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "updatedMin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsListQueryParams.prototype, "userIp", void 0);
    return CalendarEventsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListQueryParams = CalendarEventsListQueryParams;
var CalendarEventsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsListSecurityOption1, _super);
    function CalendarEventsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsListSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListSecurityOption1 = CalendarEventsListSecurityOption1;
var CalendarEventsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsListSecurityOption2, _super);
    function CalendarEventsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsListSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListSecurityOption2 = CalendarEventsListSecurityOption2;
var CalendarEventsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarEventsListSecurityOption3, _super);
    function CalendarEventsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsListSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarEventsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListSecurityOption3 = CalendarEventsListSecurityOption3;
var CalendarEventsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarEventsListSecurityOption4, _super);
    function CalendarEventsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsListSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarEventsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListSecurityOption4 = CalendarEventsListSecurityOption4;
var CalendarEventsListSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsListSecurity, _super);
    function CalendarEventsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsListSecurityOption1)
    ], CalendarEventsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsListSecurityOption2)
    ], CalendarEventsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsListSecurityOption3)
    ], CalendarEventsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsListSecurityOption4)
    ], CalendarEventsListSecurity.prototype, "option4", void 0);
    return CalendarEventsListSecurity;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListSecurity = CalendarEventsListSecurity;
var CalendarEventsListRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsListRequest, _super);
    function CalendarEventsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsListPathParams)
    ], CalendarEventsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsListQueryParams)
    ], CalendarEventsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsListSecurity)
    ], CalendarEventsListRequest.prototype, "security", void 0);
    return CalendarEventsListRequest;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListRequest = CalendarEventsListRequest;
var CalendarEventsListResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsListResponse, _super);
    function CalendarEventsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CalendarEventsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Events)
    ], CalendarEventsListResponse.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CalendarEventsListResponse.prototype, "statusCode", void 0);
    return CalendarEventsListResponse;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsListResponse = CalendarEventsListResponse;
