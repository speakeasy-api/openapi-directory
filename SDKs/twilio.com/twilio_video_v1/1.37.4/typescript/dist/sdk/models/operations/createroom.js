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
exports.CreateRoomResponse = exports.CreateRoomRequest = exports.CreateRoomSecurity = exports.CreateRoomCreateRoomRequest = exports.CreateRoomCreateRoomRequestStatusCallbackMethodEnum = exports.CreateRoomServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateRoomServerList = [
    "https://video.twilio.com",
];
var CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
(function (CreateRoomCreateRoomRequestStatusCallbackMethodEnum) {
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateRoomCreateRoomRequestStatusCallbackMethodEnum = exports.CreateRoomCreateRoomRequestStatusCallbackMethodEnum || (exports.CreateRoomCreateRoomRequestStatusCallbackMethodEnum = {}));
var CreateRoomCreateRoomRequest = /** @class */ (function (_super) {
    __extends(CreateRoomCreateRoomRequest, _super);
    function CreateRoomCreateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AudioOnly;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "audioOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=EmptyRoomTimeout;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "emptyRoomTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=EnableTurn;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "enableTurn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LargeRoom;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "largeRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MaxParticipantDuration;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "maxParticipantDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MaxParticipants;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "maxParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MediaRegion;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "mediaRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RecordParticipantsOnConnect;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "recordParticipantsOnConnect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RecordingRules;" }),
        __metadata("design:type", Object)
    ], CreateRoomCreateRoomRequest.prototype, "recordingRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "uniqueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UnusedRoomTimeout;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "unusedRoomTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VideoCodecs;" }),
        __metadata("design:type", Array)
    ], CreateRoomCreateRoomRequest.prototype, "videoCodecs", void 0);
    return CreateRoomCreateRoomRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRoomCreateRoomRequest = CreateRoomCreateRoomRequest;
var CreateRoomSecurity = /** @class */ (function (_super) {
    __extends(CreateRoomSecurity, _super);
    function CreateRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRoomSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRoomSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateRoomSecurity = CreateRoomSecurity;
var CreateRoomRequest = /** @class */ (function (_super) {
    __extends(CreateRoomRequest, _super);
    function CreateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRoomRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRoomCreateRoomRequest)
    ], CreateRoomRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRoomSecurity)
    ], CreateRoomRequest.prototype, "security", void 0);
    return CreateRoomRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRoomRequest = CreateRoomRequest;
var CreateRoomResponse = /** @class */ (function (_super) {
    __extends(CreateRoomResponse, _super);
    function CreateRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRoomResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VideoV1Room)
    ], CreateRoomResponse.prototype, "videoV1Room", void 0);
    return CreateRoomResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRoomResponse = CreateRoomResponse;
