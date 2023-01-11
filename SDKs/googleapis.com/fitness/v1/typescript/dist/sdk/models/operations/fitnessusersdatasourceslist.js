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
exports.FitnessUsersDataSourcesListResponse = exports.FitnessUsersDataSourcesListRequest = exports.FitnessUsersDataSourcesListSecurity = exports.FitnessUsersDataSourcesListSecurityOption22 = exports.FitnessUsersDataSourcesListSecurityOption21 = exports.FitnessUsersDataSourcesListSecurityOption20 = exports.FitnessUsersDataSourcesListSecurityOption19 = exports.FitnessUsersDataSourcesListSecurityOption18 = exports.FitnessUsersDataSourcesListSecurityOption17 = exports.FitnessUsersDataSourcesListSecurityOption16 = exports.FitnessUsersDataSourcesListSecurityOption15 = exports.FitnessUsersDataSourcesListSecurityOption14 = exports.FitnessUsersDataSourcesListSecurityOption13 = exports.FitnessUsersDataSourcesListSecurityOption12 = exports.FitnessUsersDataSourcesListSecurityOption11 = exports.FitnessUsersDataSourcesListSecurityOption10 = exports.FitnessUsersDataSourcesListSecurityOption9 = exports.FitnessUsersDataSourcesListSecurityOption8 = exports.FitnessUsersDataSourcesListSecurityOption7 = exports.FitnessUsersDataSourcesListSecurityOption6 = exports.FitnessUsersDataSourcesListSecurityOption5 = exports.FitnessUsersDataSourcesListSecurityOption4 = exports.FitnessUsersDataSourcesListSecurityOption3 = exports.FitnessUsersDataSourcesListSecurityOption2 = exports.FitnessUsersDataSourcesListSecurityOption1 = exports.FitnessUsersDataSourcesListQueryParams = exports.FitnessUsersDataSourcesListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FitnessUsersDataSourcesListPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListPathParams, _super);
    function FitnessUsersDataSourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListPathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesListPathParams;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListPathParams = FitnessUsersDataSourcesListPathParams;
var FitnessUsersDataSourcesListQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListQueryParams, _super);
    function FitnessUsersDataSourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dataTypeName" }),
        __metadata("design:type", Array)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "dataTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListQueryParams = FitnessUsersDataSourcesListQueryParams;
var FitnessUsersDataSourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption1, _super);
    function FitnessUsersDataSourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption1 = FitnessUsersDataSourcesListSecurityOption1;
var FitnessUsersDataSourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption2, _super);
    function FitnessUsersDataSourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption2 = FitnessUsersDataSourcesListSecurityOption2;
var FitnessUsersDataSourcesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption3, _super);
    function FitnessUsersDataSourcesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption3 = FitnessUsersDataSourcesListSecurityOption3;
var FitnessUsersDataSourcesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption4, _super);
    function FitnessUsersDataSourcesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption4 = FitnessUsersDataSourcesListSecurityOption4;
var FitnessUsersDataSourcesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption5, _super);
    function FitnessUsersDataSourcesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption5 = FitnessUsersDataSourcesListSecurityOption5;
var FitnessUsersDataSourcesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption6, _super);
    function FitnessUsersDataSourcesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption6 = FitnessUsersDataSourcesListSecurityOption6;
var FitnessUsersDataSourcesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption7, _super);
    function FitnessUsersDataSourcesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption7;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption7 = FitnessUsersDataSourcesListSecurityOption7;
var FitnessUsersDataSourcesListSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption8, _super);
    function FitnessUsersDataSourcesListSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption8;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption8 = FitnessUsersDataSourcesListSecurityOption8;
var FitnessUsersDataSourcesListSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption9, _super);
    function FitnessUsersDataSourcesListSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption9;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption9 = FitnessUsersDataSourcesListSecurityOption9;
var FitnessUsersDataSourcesListSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption10, _super);
    function FitnessUsersDataSourcesListSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption10;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption10 = FitnessUsersDataSourcesListSecurityOption10;
var FitnessUsersDataSourcesListSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption11, _super);
    function FitnessUsersDataSourcesListSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption11;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption11 = FitnessUsersDataSourcesListSecurityOption11;
var FitnessUsersDataSourcesListSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption12, _super);
    function FitnessUsersDataSourcesListSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption12;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption12 = FitnessUsersDataSourcesListSecurityOption12;
var FitnessUsersDataSourcesListSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption13, _super);
    function FitnessUsersDataSourcesListSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption13;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption13 = FitnessUsersDataSourcesListSecurityOption13;
var FitnessUsersDataSourcesListSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption14, _super);
    function FitnessUsersDataSourcesListSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption14;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption14 = FitnessUsersDataSourcesListSecurityOption14;
var FitnessUsersDataSourcesListSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption15, _super);
    function FitnessUsersDataSourcesListSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption15;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption15 = FitnessUsersDataSourcesListSecurityOption15;
var FitnessUsersDataSourcesListSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption16, _super);
    function FitnessUsersDataSourcesListSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption16;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption16 = FitnessUsersDataSourcesListSecurityOption16;
var FitnessUsersDataSourcesListSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption17, _super);
    function FitnessUsersDataSourcesListSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption17;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption17 = FitnessUsersDataSourcesListSecurityOption17;
var FitnessUsersDataSourcesListSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption18, _super);
    function FitnessUsersDataSourcesListSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption18;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption18 = FitnessUsersDataSourcesListSecurityOption18;
var FitnessUsersDataSourcesListSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption19, _super);
    function FitnessUsersDataSourcesListSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption19;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption19 = FitnessUsersDataSourcesListSecurityOption19;
var FitnessUsersDataSourcesListSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption20, _super);
    function FitnessUsersDataSourcesListSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption20;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption20 = FitnessUsersDataSourcesListSecurityOption20;
var FitnessUsersDataSourcesListSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption21, _super);
    function FitnessUsersDataSourcesListSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption21;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption21 = FitnessUsersDataSourcesListSecurityOption21;
var FitnessUsersDataSourcesListSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurityOption22, _super);
    function FitnessUsersDataSourcesListSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesListSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesListSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesListSecurityOption22;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurityOption22 = FitnessUsersDataSourcesListSecurityOption22;
var FitnessUsersDataSourcesListSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListSecurity, _super);
    function FitnessUsersDataSourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption1)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption2)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption3)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption4)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption5)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption6)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption7)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option7", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption8)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option8", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption9)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option9", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption10)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option10", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption11)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option11", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption12)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option12", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption13)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option13", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption14)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option14", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption15)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option15", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption16)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option16", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption17)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option17", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption18)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option18", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption19)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option19", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption20)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option20", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption21)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option21", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesListSecurityOption22)
    ], FitnessUsersDataSourcesListSecurity.prototype, "option22", void 0);
    return FitnessUsersDataSourcesListSecurity;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListSecurity = FitnessUsersDataSourcesListSecurity;
var FitnessUsersDataSourcesListRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListRequest, _super);
    function FitnessUsersDataSourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FitnessUsersDataSourcesListPathParams)
    ], FitnessUsersDataSourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FitnessUsersDataSourcesListQueryParams)
    ], FitnessUsersDataSourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FitnessUsersDataSourcesListSecurity)
    ], FitnessUsersDataSourcesListRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesListRequest;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListRequest = FitnessUsersDataSourcesListRequest;
var FitnessUsersDataSourcesListResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesListResponse, _super);
    function FitnessUsersDataSourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListDataSourcesResponse)
    ], FitnessUsersDataSourcesListResponse.prototype, "listDataSourcesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesListResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesListResponse;
}(utils_1.SpeakeasyBase));
exports.FitnessUsersDataSourcesListResponse = FitnessUsersDataSourcesListResponse;
