package shared

type HostedNumberOrderEnumStatusEnum string

const (
	HostedNumberOrderEnumStatusEnumReceived            HostedNumberOrderEnumStatusEnum = "received"
	HostedNumberOrderEnumStatusEnumPendingVerification HostedNumberOrderEnumStatusEnum = "pending-verification"
	HostedNumberOrderEnumStatusEnumVerified            HostedNumberOrderEnumStatusEnum = "verified"
	HostedNumberOrderEnumStatusEnumPendingLoa          HostedNumberOrderEnumStatusEnum = "pending-loa"
	HostedNumberOrderEnumStatusEnumCarrierProcessing   HostedNumberOrderEnumStatusEnum = "carrier-processing"
	HostedNumberOrderEnumStatusEnumTesting             HostedNumberOrderEnumStatusEnum = "testing"
	HostedNumberOrderEnumStatusEnumCompleted           HostedNumberOrderEnumStatusEnum = "completed"
	HostedNumberOrderEnumStatusEnumFailed              HostedNumberOrderEnumStatusEnum = "failed"
	HostedNumberOrderEnumStatusEnumActionRequired      HostedNumberOrderEnumStatusEnum = "action-required"
)
