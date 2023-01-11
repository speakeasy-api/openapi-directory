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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseWork = exports.CourseWorkWorkTypeEnum = exports.CourseWorkSubmissionModificationModeEnum = exports.CourseWorkStateEnum = exports.CourseWorkAssigneeModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var assignment_1 = require("./assignment");
var date_1 = require("./date");
var timeofday_1 = require("./timeofday");
var gradecategory_1 = require("./gradecategory");
var individualstudentsoptions_1 = require("./individualstudentsoptions");
var material_1 = require("./material");
var multiplechoicequestion_1 = require("./multiplechoicequestion");
var CourseWorkAssigneeModeEnum;
(function (CourseWorkAssigneeModeEnum) {
    CourseWorkAssigneeModeEnum["AssigneeModeUnspecified"] = "ASSIGNEE_MODE_UNSPECIFIED";
    CourseWorkAssigneeModeEnum["AllStudents"] = "ALL_STUDENTS";
    CourseWorkAssigneeModeEnum["IndividualStudents"] = "INDIVIDUAL_STUDENTS";
})(CourseWorkAssigneeModeEnum = exports.CourseWorkAssigneeModeEnum || (exports.CourseWorkAssigneeModeEnum = {}));
var CourseWorkStateEnum;
(function (CourseWorkStateEnum) {
    CourseWorkStateEnum["CourseWorkStateUnspecified"] = "COURSE_WORK_STATE_UNSPECIFIED";
    CourseWorkStateEnum["Published"] = "PUBLISHED";
    CourseWorkStateEnum["Draft"] = "DRAFT";
    CourseWorkStateEnum["Deleted"] = "DELETED";
})(CourseWorkStateEnum = exports.CourseWorkStateEnum || (exports.CourseWorkStateEnum = {}));
var CourseWorkSubmissionModificationModeEnum;
(function (CourseWorkSubmissionModificationModeEnum) {
    CourseWorkSubmissionModificationModeEnum["SubmissionModificationModeUnspecified"] = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED";
    CourseWorkSubmissionModificationModeEnum["ModifiableUntilTurnedIn"] = "MODIFIABLE_UNTIL_TURNED_IN";
    CourseWorkSubmissionModificationModeEnum["Modifiable"] = "MODIFIABLE";
})(CourseWorkSubmissionModificationModeEnum = exports.CourseWorkSubmissionModificationModeEnum || (exports.CourseWorkSubmissionModificationModeEnum = {}));
var CourseWorkWorkTypeEnum;
(function (CourseWorkWorkTypeEnum) {
    CourseWorkWorkTypeEnum["CourseWorkTypeUnspecified"] = "COURSE_WORK_TYPE_UNSPECIFIED";
    CourseWorkWorkTypeEnum["Assignment"] = "ASSIGNMENT";
    CourseWorkWorkTypeEnum["ShortAnswerQuestion"] = "SHORT_ANSWER_QUESTION";
    CourseWorkWorkTypeEnum["MultipleChoiceQuestion"] = "MULTIPLE_CHOICE_QUESTION";
})(CourseWorkWorkTypeEnum = exports.CourseWorkWorkTypeEnum || (exports.CourseWorkWorkTypeEnum = {}));
// CourseWork
/**
 * Course work created by a teacher for students of the course.
**/
var CourseWork = /** @class */ (function (_super) {
    __extends(CourseWork, _super);
    function CourseWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "alternateLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigneeMode" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "assigneeMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignment" }),
        __metadata("design:type", assignment_1.Assignment)
    ], CourseWork.prototype, "assignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedWithDeveloper" }),
        __metadata("design:type", Boolean)
    ], CourseWork.prototype, "associatedWithDeveloper", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=courseId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "courseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creatorUserId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "creatorUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", date_1.Date)
    ], CourseWork.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueTime" }),
        __metadata("design:type", timeofday_1.TimeOfDay)
    ], CourseWork.prototype, "dueTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gradeCategory" }),
        __metadata("design:type", gradecategory_1.GradeCategory)
    ], CourseWork.prototype, "gradeCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=individualStudentsOptions" }),
        __metadata("design:type", individualstudentsoptions_1.IndividualStudentsOptions)
    ], CourseWork.prototype, "individualStudentsOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=materials", elemType: material_1.Material }),
        __metadata("design:type", Array)
    ], CourseWork.prototype, "materials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], CourseWork.prototype, "maxPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multipleChoiceQuestion" }),
        __metadata("design:type", multiplechoicequestion_1.MultipleChoiceQuestion)
    ], CourseWork.prototype, "multipleChoiceQuestion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduledTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "scheduledTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submissionModificationMode" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "submissionModificationMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topicId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "topicId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workType" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "workType", void 0);
    return CourseWork;
}(utils_1.SpeakeasyBase));
exports.CourseWork = CourseWork;
