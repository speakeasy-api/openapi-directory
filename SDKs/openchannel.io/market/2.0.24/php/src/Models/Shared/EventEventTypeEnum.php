<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The current event type */
enum EventEventTypeEnum: string
{
    case APP_SUBMITTED = 'app.submitted';
    case APP_APPROVED = 'app.approved';
    case APP_SUSPENDED = 'app.suspended';
    case APP_UNSUSPENDED = 'app.unsuspended';
    case APP_REJECTED = 'app.rejected';
    case APP_IN_REVIEW = 'app.inReview';
    case APP_INSTALLED = 'app.installed';
    case APP_UNINSTALLED = 'app.uninstalled';
    case REVIEW_CREATED = 'review.created';
    case REVIEW_UPDATED = 'review.updated';
    case REVIEW_APPROVED = 'review.approved';
    case REVIEW_SPAM = 'review.spam';
    case REVIEW_REMOVED = 'review.removed';
    case USER_CREATED = 'user.created';
    case USER_UPDATED = 'user.updated';
    case USER_REMOVED = 'user.removed';
    case USER_INVALID_PAYMENT_DETAILS = 'user.invalidPaymentDetails';
    case USER_PAYMENT_DETAILS_REQUIRED = 'user.paymentDetailsRequired';
    case DEVELOPER_CREATED = 'developer.created';
    case DEVELOPER_UPDATED = 'developer.updated';
    case DEVELOPER_REMOVED = 'developer.removed';
    case DEVELOPER_PAYMENT_DETAILS_REQUIRED = 'developer.paymentDetailsRequired';
    case PERMISSION_ADDED = 'permission.added';
    case PERMISSION_REMOVED = 'permission.removed';
    case PAYMENT_COMPLETE = 'payment.complete';
    case PAYMENT_REFUNDED = 'payment.refunded';
    case PAYMENT_REQUIRED = 'payment.required';
    case OWNERSHIP_EXPIRED = 'ownership.expired';
}
