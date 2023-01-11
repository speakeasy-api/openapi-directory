import dataclasses
from enum import Enum

class ArchiveKindEnum1(str, Enum):
    LATEST_ARCHIVE = "latestArchive"
    LATEST_COMMIT = "latestCommit"
    ARCHIVE_ID = "archive ID"

