"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEnumStatusEnum = void 0;
var MessageEnumStatusEnum;
(function (MessageEnumStatusEnum) {
    MessageEnumStatusEnum["Queued"] = "queued";
    MessageEnumStatusEnum["Sending"] = "sending";
    MessageEnumStatusEnum["Sent"] = "sent";
    MessageEnumStatusEnum["Failed"] = "failed";
    MessageEnumStatusEnum["Delivered"] = "delivered";
    MessageEnumStatusEnum["Undelivered"] = "undelivered";
    MessageEnumStatusEnum["Receiving"] = "receiving";
    MessageEnumStatusEnum["Received"] = "received";
    MessageEnumStatusEnum["Accepted"] = "accepted";
    MessageEnumStatusEnum["Scheduled"] = "scheduled";
    MessageEnumStatusEnum["Read"] = "read";
    MessageEnumStatusEnum["PartiallyDelivered"] = "partially_delivered";
    MessageEnumStatusEnum["Canceled"] = "canceled";
})(MessageEnumStatusEnum = exports.MessageEnumStatusEnum || (exports.MessageEnumStatusEnum = {}));
