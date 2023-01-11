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
exports.CreateGroupCategoryResponse = exports.CreateGroupCategoryRequest = exports.CreateGroupCategory200ApplicationJson = exports.CreateGroupCategory200ApplicationJsonResultEnum = exports.CreateGroupCategory200ApplicationJsonData = exports.CreateGroupCategory200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateGroupCategory200ApplicationJsonActionEnum;
(function (CreateGroupCategory200ApplicationJsonActionEnum) {
    CreateGroupCategory200ApplicationJsonActionEnum["CreateGroupCategory"] = "CreateGroupCategory";
})(CreateGroupCategory200ApplicationJsonActionEnum = exports.CreateGroupCategory200ApplicationJsonActionEnum || (exports.CreateGroupCategory200ApplicationJsonActionEnum = {}));
var CreateGroupCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroupCategory200ApplicationJsonData, _super);
    function CreateGroupCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupCategories", elemType: shared.GroupCategory }),
        __metadata("design:type", Array)
    ], CreateGroupCategory200ApplicationJsonData.prototype, "groupCategories", void 0);
    return CreateGroupCategory200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.CreateGroupCategory200ApplicationJsonData = CreateGroupCategory200ApplicationJsonData;
var CreateGroupCategory200ApplicationJsonResultEnum;
(function (CreateGroupCategory200ApplicationJsonResultEnum) {
    CreateGroupCategory200ApplicationJsonResultEnum["Success"] = "success";
    CreateGroupCategory200ApplicationJsonResultEnum["Error"] = "error";
})(CreateGroupCategory200ApplicationJsonResultEnum = exports.CreateGroupCategory200ApplicationJsonResultEnum || (exports.CreateGroupCategory200ApplicationJsonResultEnum = {}));
var CreateGroupCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupCategory200ApplicationJson, _super);
    function CreateGroupCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateGroupCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", CreateGroupCategory200ApplicationJsonData)
    ], CreateGroupCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateGroupCategory200ApplicationJson.prototype, "result", void 0);
    return CreateGroupCategory200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupCategory200ApplicationJson = CreateGroupCategory200ApplicationJson;
var CreateGroupCategoryRequest = /** @class */ (function (_super) {
    __extends(CreateGroupCategoryRequest, _super);
    function CreateGroupCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupCategory)
    ], CreateGroupCategoryRequest.prototype, "request", void 0);
    return CreateGroupCategoryRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGroupCategoryRequest = CreateGroupCategoryRequest;
var CreateGroupCategoryResponse = /** @class */ (function (_super) {
    __extends(CreateGroupCategoryResponse, _super);
    function CreateGroupCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGroupCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupCategory200ApplicationJson)
    ], CreateGroupCategoryResponse.prototype, "createGroupCategory200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGroupCategoryResponse.prototype, "statusCode", void 0);
    return CreateGroupCategoryResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGroupCategoryResponse = CreateGroupCategoryResponse;
