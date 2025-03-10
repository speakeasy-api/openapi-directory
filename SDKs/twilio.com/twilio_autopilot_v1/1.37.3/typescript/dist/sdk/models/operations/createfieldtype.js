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
export var CreateFieldTypeServerList = [
    "https://autopilot.twilio.com",
];
var CreateFieldTypePathParams = /** @class */ (function (_super) {
    __extends(CreateFieldTypePathParams, _super);
    function CreateFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateFieldTypePathParams.prototype, "assistantSid", void 0);
    return CreateFieldTypePathParams;
}(SpeakeasyBase));
export { CreateFieldTypePathParams };
var CreateFieldTypeCreateFieldTypeRequest = /** @class */ (function (_super) {
    __extends(CreateFieldTypeCreateFieldTypeRequest, _super);
    function CreateFieldTypeCreateFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateFieldTypeCreateFieldTypeRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateFieldTypeCreateFieldTypeRequest.prototype, "uniqueName", void 0);
    return CreateFieldTypeCreateFieldTypeRequest;
}(SpeakeasyBase));
export { CreateFieldTypeCreateFieldTypeRequest };
var CreateFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(CreateFieldTypeSecurity, _super);
    function CreateFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFieldTypeSecurity;
}(SpeakeasyBase));
export { CreateFieldTypeSecurity };
var CreateFieldTypeRequest = /** @class */ (function (_super) {
    __extends(CreateFieldTypeRequest, _super);
    function CreateFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldTypePathParams)
    ], CreateFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFieldTypeCreateFieldTypeRequest)
    ], CreateFieldTypeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldTypeSecurity)
    ], CreateFieldTypeRequest.prototype, "security", void 0);
    return CreateFieldTypeRequest;
}(SpeakeasyBase));
export { CreateFieldTypeRequest };
var CreateFieldTypeResponse = /** @class */ (function (_super) {
    __extends(CreateFieldTypeResponse, _super);
    function CreateFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldType)
    ], CreateFieldTypeResponse.prototype, "autopilotV1AssistantFieldType", void 0);
    return CreateFieldTypeResponse;
}(SpeakeasyBase));
export { CreateFieldTypeResponse };
