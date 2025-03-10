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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var UpdateWorkerChannelServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateWorkerChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkerChannelPathParams, _super);
    function UpdateWorkerChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWorkerChannelPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" }),
        __metadata("design:type", String)
    ], UpdateWorkerChannelPathParams.prototype, "workerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateWorkerChannelPathParams.prototype, "workspaceSid", void 0);
    return UpdateWorkerChannelPathParams;
}(SpeakeasyBase));
export { UpdateWorkerChannelPathParams };
var UpdateWorkerChannelUpdateWorkerChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerChannelUpdateWorkerChannelRequest, _super);
    function UpdateWorkerChannelUpdateWorkerChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Available;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerChannelUpdateWorkerChannelRequest.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Capacity;" }),
        __metadata("design:type", Number)
    ], UpdateWorkerChannelUpdateWorkerChannelRequest.prototype, "capacity", void 0);
    return UpdateWorkerChannelUpdateWorkerChannelRequest;
}(SpeakeasyBase));
export { UpdateWorkerChannelUpdateWorkerChannelRequest };
var UpdateWorkerChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateWorkerChannelSecurity, _super);
    function UpdateWorkerChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWorkerChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWorkerChannelSecurity;
}(SpeakeasyBase));
export { UpdateWorkerChannelSecurity };
var UpdateWorkerChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerChannelRequest, _super);
    function UpdateWorkerChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkerChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkerChannelPathParams)
    ], UpdateWorkerChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWorkerChannelUpdateWorkerChannelRequest)
    ], UpdateWorkerChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkerChannelSecurity)
    ], UpdateWorkerChannelRequest.prototype, "security", void 0);
    return UpdateWorkerChannelRequest;
}(SpeakeasyBase));
export { UpdateWorkerChannelRequest };
var UpdateWorkerChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkerChannelResponse, _super);
    function UpdateWorkerChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkerChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorkerChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkerChannel)
    ], UpdateWorkerChannelResponse.prototype, "taskrouterV1WorkspaceWorkerWorkerChannel", void 0);
    return UpdateWorkerChannelResponse;
}(SpeakeasyBase));
export { UpdateWorkerChannelResponse };
