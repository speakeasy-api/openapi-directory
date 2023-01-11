"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransferEventTypeEnum = void 0;
var BankTransferEventTypeEnum;
(function (BankTransferEventTypeEnum) {
    BankTransferEventTypeEnum["Pending"] = "pending";
    BankTransferEventTypeEnum["Cancelled"] = "cancelled";
    BankTransferEventTypeEnum["Failed"] = "failed";
    BankTransferEventTypeEnum["Posted"] = "posted";
    BankTransferEventTypeEnum["Reversed"] = "reversed";
    BankTransferEventTypeEnum["ReceiverPending"] = "receiver_pending";
    BankTransferEventTypeEnum["ReceiverPosted"] = "receiver_posted";
})(BankTransferEventTypeEnum = exports.BankTransferEventTypeEnum || (exports.BankTransferEventTypeEnum = {}));
