package shared

type ManualFile struct {
	DriveFileID        *int64  `json:"driveFileId,omitempty"`
	IsProofread        *bool   `json:"isProofread,omitempty"`
	IsTranslated       *bool   `json:"isTranslated,omitempty"`
	Language           *string `json:"language,omitempty"`
	ProofreadingFileID *int64  `json:"proofreadingFileId,omitempty"`
	TranslationFileID  *int64  `json:"translationFileId,omitempty"`
}
