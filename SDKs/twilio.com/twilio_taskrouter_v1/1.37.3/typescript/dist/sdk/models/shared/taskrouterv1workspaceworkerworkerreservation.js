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
import { WorkerReservationEnumStatusEnum } from "./workerreservationenumstatusenum";
var TaskrouterV1WorkspaceWorkerWorkerReservation = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceWorkerWorkerReservation, _super);
    function TaskrouterV1WorkspaceWorkerWorkerReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservation_status" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "reservationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "taskSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worker_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "workerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worker_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "workerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkerReservation.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceWorkerWorkerReservation;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceWorkerWorkerReservation };
