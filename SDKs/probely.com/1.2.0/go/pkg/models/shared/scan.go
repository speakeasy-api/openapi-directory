package shared

import (
	"time"
)

type ScanCrawlerStateEnum string

const (
	ScanCrawlerStateEnumStarted ScanCrawlerStateEnum = "started"
	ScanCrawlerStateEnumEnded   ScanCrawlerStateEnum = "ended"
)

// ScanCrawlerStatus
// The number of crawled URLs and total number of URLs in the queue
type ScanCrawlerStatus struct {
	Zero *int64 `json:"0,omitempty"`
	One  *int64 `json:"1,omitempty"`
}

// ScanCrawler
// Information on the status of the crawling step of the scanning process
type ScanCrawler struct {
	Error   []string              `json:"error,omitempty"`
	State   *ScanCrawlerStateEnum `json:"state,omitempty"`
	Status  *ScanCrawlerStatus    `json:"status,omitempty"`
	Warning []string              `json:"warning,omitempty"`
}

type ScanFingerprinterStateEnum string

const (
	ScanFingerprinterStateEnumStarted ScanFingerprinterStateEnum = "started"
	ScanFingerprinterStateEnumEnded   ScanFingerprinterStateEnum = "ended"
)

// ScanFingerprinter
// Information on the status of the crawling step of the scanning process
type ScanFingerprinter struct {
	Count   *int64                      `json:"count,omitempty"`
	Error   []string                    `json:"error,omitempty"`
	State   *ScanFingerprinterStateEnum `json:"state,omitempty"`
	Warning []string                    `json:"warning,omitempty"`
}

type ScanScannerStateEnum string

const (
	ScanScannerStateEnumStarted ScanScannerStateEnum = "started"
	ScanScannerStateEnumEnded   ScanScannerStateEnum = "ended"
)

// ScanScannerStatus
// The number of scanner tasks completed and total number of tasks in the queue
type ScanScannerStatus struct {
	Zero *int64 `json:"0,omitempty"`
	One  *int64 `json:"1,omitempty"`
}

// ScanScanner
// Information on the status of the search for vulnerabilities of the scanning process
type ScanScanner struct {
	Error   []string              `json:"error,omitempty"`
	State   *ScanScannerStateEnum `json:"state,omitempty"`
	Status  *ScanScannerStatus    `json:"status,omitempty"`
	Warning []string              `json:"warning,omitempty"`
}

type Scan struct {
	Changed       *time.Time         `json:"changed,omitempty"`
	ChangedBy     *ChangedBy         `json:"changed_by,omitempty"`
	Completed     *time.Time         `json:"completed,omitempty"`
	Crawler       *ScanCrawler       `json:"crawler,omitempty"`
	Created       *time.Time         `json:"created,omitempty"`
	CreatedBy     *CreatedBy         `json:"created_by,omitempty"`
	Fingerprinter *ScanFingerprinter `json:"fingerprinter,omitempty"`
	Highs         *int64             `json:"highs,omitempty"`
	ID            *string            `json:"id,omitempty"`
	Lows          *int64             `json:"lows,omitempty"`
	Mediums       *int64             `json:"mediums,omitempty"`
	ScanProfile   *ScanProfileEnum   `json:"scan_profile,omitempty"`
	Scanner       *ScanScanner       `json:"scanner,omitempty"`
	Started       *time.Time         `json:"started,omitempty"`
	Status        *ScanStatusEnum    `json:"status,omitempty"`
	Target        *TargetSimple      `json:"target,omitempty"`
}
