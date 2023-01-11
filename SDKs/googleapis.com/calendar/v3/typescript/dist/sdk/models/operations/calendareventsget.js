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
exports.CalendarEventsGetResponse = exports.CalendarEventsGetRequest = exports.CalendarEventsGetSecurity = exports.CalendarEventsGetSecurityOption4 = exports.CalendarEventsGetSecurityOption3 = exports.CalendarEventsGetSecurityOption2 = exports.CalendarEventsGetSecurityOption1 = exports.CalendarEventsGetQueryParams = exports.CalendarEventsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CalendarEventsGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsGetPathParams, _super);
    function CalendarEventsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsGetPathParams.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsGetPathParams.prototype, "eventId", void 0);
    return CalendarEventsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetPathParams = CalendarEventsGetPathParams;
var CalendarEventsGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsGetQueryParams, _super);
    function CalendarEventsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsGetQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsGetQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "userIp", void 0);
    return CalendarEventsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetQueryParams = CalendarEventsGetQueryParams;
var CalendarEventsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption1, _super);
    function CalendarEventsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetSecurityOption1 = CalendarEventsGetSecurityOption1;
var CalendarEventsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption2, _super);
    function CalendarEventsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetSecurityOption2 = CalendarEventsGetSecurityOption2;
var CalendarEventsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption3, _super);
    function CalendarEventsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetSecurityOption3 = CalendarEventsGetSecurityOption3;
var CalendarEventsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption4, _super);
    function CalendarEventsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetSecurityOption4 = CalendarEventsGetSecurityOption4;
var CalendarEventsGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurity, _super);
    function CalendarEventsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption1)
    ], CalendarEventsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption2)
    ], CalendarEventsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption3)
    ], CalendarEventsGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption4)
    ], CalendarEventsGetSecurity.prototype, "option4", void 0);
    return CalendarEventsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetSecurity = CalendarEventsGetSecurity;
var CalendarEventsGetRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsGetRequest, _super);
    function CalendarEventsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsGetPathParams)
    ], CalendarEventsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsGetQueryParams)
    ], CalendarEventsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CalendarEventsGetSecurity)
    ], CalendarEventsGetRequest.prototype, "security", void 0);
    return CalendarEventsGetRequest;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetRequest = CalendarEventsGetRequest;
var CalendarEventsGetResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsGetResponse, _super);
    function CalendarEventsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CalendarEventsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsGetResponse.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CalendarEventsGetResponse.prototype, "statusCode", void 0);
    return CalendarEventsGetResponse;
}(utils_1.SpeakeasyBase));
exports.CalendarEventsGetResponse = CalendarEventsGetResponse;
