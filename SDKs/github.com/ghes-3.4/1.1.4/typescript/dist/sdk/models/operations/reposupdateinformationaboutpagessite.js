"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ReposUpdateInformationAboutPagesSiteResponse = exports.ReposUpdateInformationAboutPagesSiteRequest = exports.ReposUpdateInformationAboutPagesSiteRequestBody1 = exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3 = exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4 = exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5 = exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source2 = exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum["Legacy"] = "legacy";
    ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum["Workflow"] = "workflow";
})(ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum = {}));
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum = {}));
/**
 * Update the source for the repository. Must include the branch name and path.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody5Source2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody5Source2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody5Source2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5Source2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5Source2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody5Source2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source2 = ReposUpdateInformationAboutPagesSiteRequestBody5Source2;
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBody5 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody5, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "build_type" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5.prototype, "buildType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody5.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody5;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody5 = ReposUpdateInformationAboutPagesSiteRequestBody5;
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum["Legacy"] = "legacy";
    ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum["Workflow"] = "workflow";
})(ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum = {}));
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum = {}));
/**
 * Update the source for the repository. Must include the branch name and path.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody4Source2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody4Source2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody4Source2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4Source2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4Source2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody4Source2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source2 = ReposUpdateInformationAboutPagesSiteRequestBody4Source2;
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBody4 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody4, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "build_type" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4.prototype, "buildType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody4.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody4;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody4 = ReposUpdateInformationAboutPagesSiteRequestBody4;
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum["Legacy"] = "legacy";
    ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum["Workflow"] = "workflow";
})(ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum = {}));
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum = {}));
/**
 * Update the source for the repository. Must include the branch name and path.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody3Source2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody3Source2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody3Source2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3Source2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3Source2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody3Source2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source2 = ReposUpdateInformationAboutPagesSiteRequestBody3Source2;
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBody3 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody3, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "build_type" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3.prototype, "buildType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody3.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody3;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody3 = ReposUpdateInformationAboutPagesSiteRequestBody3;
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum["Legacy"] = "legacy";
    ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum["Workflow"] = "workflow";
})(ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum = {}));
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum = {}));
/**
 * Update the source for the repository. Must include the branch name and path.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody2Source2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody2Source2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody2Source2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2Source2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2Source2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody2Source2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source2 = ReposUpdateInformationAboutPagesSiteRequestBody2Source2;
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBody2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "build_type" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2.prototype, "buildType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody2.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody2 = ReposUpdateInformationAboutPagesSiteRequestBody2;
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum["Legacy"] = "legacy";
    ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum["Workflow"] = "workflow";
})(ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum = {}));
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum = {}));
/**
 * Update the source for the repository. Must include the branch name and path.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody1Source2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody1Source2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody1Source2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1Source2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1Source2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody1Source2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source2 = ReposUpdateInformationAboutPagesSiteRequestBody1Source2;
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
var ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBody1 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody1, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "build_type" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1.prototype, "buildType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody1.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody1;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody1 = ReposUpdateInformationAboutPagesSiteRequestBody1;
var ReposUpdateInformationAboutPagesSiteRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequest, _super);
    function ReposUpdateInformationAboutPagesSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner",
        }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repo",
        }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "repo", void 0);
    return ReposUpdateInformationAboutPagesSiteRequest;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequest = ReposUpdateInformationAboutPagesSiteRequest;
var ReposUpdateInformationAboutPagesSiteResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteResponse, _super);
    function ReposUpdateInformationAboutPagesSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "scimError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "validationError", void 0);
    return ReposUpdateInformationAboutPagesSiteResponse;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteResponse = ReposUpdateInformationAboutPagesSiteResponse;
