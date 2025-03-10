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
export var DeleteArchivedCallServerList = [
    "https://voice.twilio.com",
];
var DeleteArchivedCallPathParams = /** @class */ (function (_super) {
    __extends(DeleteArchivedCallPathParams, _super);
    function DeleteArchivedCallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Date" }),
        __metadata("design:type", Date)
    ], DeleteArchivedCallPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteArchivedCallPathParams.prototype, "sid", void 0);
    return DeleteArchivedCallPathParams;
}(SpeakeasyBase));
export { DeleteArchivedCallPathParams };
var DeleteArchivedCallSecurity = /** @class */ (function (_super) {
    __extends(DeleteArchivedCallSecurity, _super);
    function DeleteArchivedCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteArchivedCallSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteArchivedCallSecurity;
}(SpeakeasyBase));
export { DeleteArchivedCallSecurity };
var DeleteArchivedCallRequest = /** @class */ (function (_super) {
    __extends(DeleteArchivedCallRequest, _super);
    function DeleteArchivedCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteArchivedCallRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteArchivedCallPathParams)
    ], DeleteArchivedCallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteArchivedCallSecurity)
    ], DeleteArchivedCallRequest.prototype, "security", void 0);
    return DeleteArchivedCallRequest;
}(SpeakeasyBase));
export { DeleteArchivedCallRequest };
var DeleteArchivedCallResponse = /** @class */ (function (_super) {
    __extends(DeleteArchivedCallResponse, _super);
    function DeleteArchivedCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteArchivedCallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteArchivedCallResponse.prototype, "statusCode", void 0);
    return DeleteArchivedCallResponse;
}(SpeakeasyBase));
export { DeleteArchivedCallResponse };
